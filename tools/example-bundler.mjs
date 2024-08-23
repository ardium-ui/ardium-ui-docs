import Case from 'case';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  createDirectoryAsync,
  deleteDirectoryAsync,
  formatDuration,
  formatFileSize,
  getFileSize,
  makeError,
  makeSuccess,
  readDirectoryAsync,
  readFileAsync,
  writeFileAsync,
} from './utils.mjs';

/**
 * Recursively copies TypeScript files from the source directory to the output directory as .txt files.
 * @param {string} sourceDirectoryPath - The path to the directory containing the source .ts files.
 * @param {string} outputDirectoryPath - The path to the directory where the .txt files should be saved.
 */
async function createExampleBundles(sourceDirectoryPath, outputDirectoryPath) {
  const startDate = Date.now();

  const outputFilesArray = [];

  const [totalFiles, totalSize] = await _createExampleBundlesRecursive(
    sourceDirectoryPath,
    outputDirectoryPath,
    0,
    0,
    outputFilesArray
  );

  await _createPublicApiFile(outputFilesArray, outputDirectoryPath);

  const endDate = Date.now();
  const totalSizeFormatted = formatFileSize(totalSize);
  const timeFormatted = formatDuration(endDate - startDate);
  console.info(
    `\nCreated ${totalFiles.toLocaleString('en-US')} file${
      totalFiles != 1 ? 's' : ''
    } (${totalSizeFormatted}) in ${timeFormatted}`
  );
}
async function _createExampleBundlesRecursive(currentPath, outputPath, totalFiles, totalSize, outputFilesArray) {
  const items = await readDirectoryAsync(currentPath);

  if (items.every(item => item.isDirectory())) {
    for (const item of items) {
      const itemPath = path.join(currentPath, item.name);
      [totalFiles, totalSize] = await _createExampleBundlesRecursive(
        itemPath,
        outputPath,
        totalFiles,
        totalSize,
        outputFilesArray
      );
    }
    return [totalFiles, totalSize];
  }

  const currentPathSplit = currentPath.split('\\');
  const currentDirectoryName = currentPathSplit[currentPathSplit.length - 1];

  const outputData = {};

  if (items.every(item => item.isFile())) {
    const filename = currentDirectoryName + '.ts';
    const fileOutputPath = path.join(outputPath, filename);
    const fileImportName = Case.pascal(currentDirectoryName);
    const fileExportName = fileImportName + 'Data';
    const relativePath = path.relative(outputPath, currentPath).replaceAll('\\', '/') + '/' + currentDirectoryName;

    outputData.component = fileImportName;

    for (const item of items) {
      const itemPath = path.join(currentPath, item.name);
      const data = await readFileAsync(itemPath);

      const itemNameMatch = item.name.match(
        new RegExp(`^${currentDirectoryName}\\.(?:(simple)\\.)?(ts|html|scss|txt)$`)
      );
      if (!itemNameMatch) {
        if (!outputData.other) {
          outputData.other = {};
        }
        outputData.other[item.name] = data;
        continue;
      }

      const [_, simple, extension] = itemNameMatch;

      let itemKey = extension;
      if (simple) {
        itemKey = simple + Case.pascal(extension);
      }
      outputData[itemKey] = data;
    }

    const dataAsString = JSON.stringify(outputData).replace(new RegExp(`"${fileImportName}"`), fileImportName);
    outputFilesArray.push(currentDirectoryName);

    const dataToWrite = `import { ${fileImportName} } from '${relativePath}';\n export const ${fileExportName} = ${dataAsString}`;

    await writeFileAsync(fileOutputPath, dataToWrite);

    const size = await getFileSize(fileOutputPath);
    const sizeFormatted = formatFileSize(size);

    totalFiles++;
    totalSize += size;

    console.info(
      makeSuccess(),
      `Created ${filename} (${sizeFormatted}) containing ${items.length} file${items.length != 1 ? 's' : ''}`
    );

    return [totalFiles, totalSize];
  }

  const errorMessage = `All source subdirectories must contain exclusively folders or exclusively files. The directory ${currentPath} does not meet this criteria.`;
  console.error(
    makeError(),
    `All source subdirectories must contain exclusively folders or exclusively files. The directory ${currentPath} does not meet this criteria.`
  );
  throw errorMessage;
}
async function _createPublicApiFile(outputFilesArray, outputDirectoryPath) {
  const data = outputFilesArray.map(v => `export * from './${outputFilesArray}';`).join('\n');
  const fileOutputPath = path.join(outputDirectoryPath, 'index.ts');

  await writeFileAsync(fileOutputPath, data);

  const size = await getFileSize(fileOutputPath);
  const sizeFormatted = formatFileSize(size);

  console.info(makeSuccess(), `Created index.ts (${sizeFormatted})`);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.join(__dirname, '../src/examples');
const outputDir = path.join(__dirname, '../txt-dist');

(async () => {
  const successfulDelete = await deleteDirectoryAsync(outputDir);
  if (!successfulDelete) return;
  const successfulCreate = await createDirectoryAsync(outputDir);
  if (!successfulCreate) return;
  createExampleBundles(sourceDir, outputDir);
})();
