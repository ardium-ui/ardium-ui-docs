import Case from 'case';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  createDirectoryAsync,
  deleteDirectoryAsync,
  displayError,
  displaySuccess,
  readDirectoryAsync,
  readFileAsync,
  writeFileAsync,
} from '../../../common/utils.js';
import { Timer } from '../timer.js';
import { formatFileSize, TotalsMeter } from '../totals.js';
import argv from './argv.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = __dirname.split('ardium-ui-docs')[0] + 'ardium-ui-docs';
const sourceDir = path.join(rootDir, 'example-bundler', argv.inPath);
const outputDir = path.join(rootDir, 'example-bundler', argv.outPath);

(async () => {
  const successfulDelete = await deleteDirectoryAsync(outputDir);
  if (!successfulDelete) return;
  const successfulCreate = await createDirectoryAsync(outputDir);
  if (!successfulCreate) return;

  const timer = new Timer();
  const outputFilesArray: string[] = [];

  try {
    const totalsMeter = new TotalsMeter();
    const bundledTotalsMeter = new TotalsMeter();
    await _createExampleBundlesRecursive(sourceDir, outputDir, outputFilesArray, totalsMeter, bundledTotalsMeter);

    await _createPublicApiFile(outputFilesArray, outputDir);

    timer.end();
    console.info(
      `\nBundled ${bundledTotalsMeter.totalString(
        'example file'
      )} into ${totalsMeter.toString()} in ${timer.toString()}`
    );
  } catch (error) {}
})();

async function _createExampleBundlesRecursive(
  currentPath: string,
  outputPath: string,
  outputFilesArray: string[],
  totalsMeter: TotalsMeter = new TotalsMeter(),
  bundledTotalsMeter: TotalsMeter = new TotalsMeter()
): Promise<void> {
  const items = await readDirectoryAsync(currentPath);

  if (items.every(item => item.isDirectory())) {
    for (const item of items) {
      const itemPath = path.join(currentPath, item.name);
      await _createExampleBundlesRecursive(itemPath, outputPath, outputFilesArray, totalsMeter, bundledTotalsMeter);
    }
    return;
  }

  const currentPathSplit = currentPath.split('\\');
  const currentDirectoryName = currentPathSplit[currentPathSplit.length - 1];

  const outputData: Record<string, string> = {};

  if (items.every(item => item.isFile())) {
    const filename = currentDirectoryName + '.ts';
    const fileOutputPath = path.join(outputPath, filename);
    const fileImportName = Case.pascal(currentDirectoryName);
    const fileExportName = fileImportName + 'Data';
    const relativePath = path.relative(outputPath, currentPath).replaceAll('\\', '/') + '/' + currentDirectoryName;

    outputData['component'] = fileImportName;

    for (const item of items) {
      bundledTotalsMeter.addFile(0);
      const itemPath = path.join(currentPath, item.name);
      const data = await readFileAsync(itemPath);

      const itemNameMatch = item.name.match(
        new RegExp(`^${currentDirectoryName}\\.(?:(simple)\\.)?(ts|html|scss|txt)$`)
      );
      if (!itemNameMatch) {
        outputData[item.name] = data;
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

    const dataToWrite = `import { ${fileImportName} } from '${relativePath}';\nexport const ${fileExportName} = ${dataAsString}`;

    await writeFileAsync(fileOutputPath, dataToWrite);
    const size = dataToWrite.length;
    totalsMeter.addFile(size);

    const subtotal = new TotalsMeter(items.length, size);

    displaySuccess(`Created ${filename} ${subtotal.format('(%s) containing %n')}`);
    return;
  }

  const errorMessage = `All source subdirectories must contain exclusively folders or exclusively files. The directory ${currentPath.replace(
    rootDir,
    ''
  )} does not meet this criteria.`;
  displayError(errorMessage);
  throw new Error();
}
async function _createPublicApiFile(outputFilesArray: string[], outputDirectoryPath: string) {
  const data = outputFilesArray.map(v => `export * from './${v}';`).join('\n');
  const fileOutputPath = path.join(outputDirectoryPath, 'index.ts');

  await writeFileAsync(fileOutputPath, data);
  const sizeFormatted = formatFileSize(data.length);

  displaySuccess(`Created index.ts (${sizeFormatted})`);
}
