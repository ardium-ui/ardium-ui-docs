import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import { createDirectoryAsync, deleteDirectoryAsync, formatDuration, formatFileSize, getFileSize, readDirectoryAsync, readFileAsync, writeFileAsync } from './utils.mjs';

/**
 * Recursively copies TypeScript files from the source directory to the output directory as .txt files.
 * @param {string} sourceDirectoryPath - The path to the directory containing the source .ts files.
 * @param {string} outputDirectoryPath - The path to the directory where the .txt files should be saved.
 */
async function createExampleBundles(sourceDirectoryPath, outputDirectoryPath) {
  const startDate = Date.now();

  const [totalFiles, totalSize] = await _createExampleBundlesRecursive(sourceDirectoryPath, outputDirectoryPath);

  const endDate = Date.now();
  const totalSizeFormatted = formatFileSize(totalSize)
  const timeFormatted = formatDuration(endDate - startDate)
  console.info(`\nCreated ${totalFiles.toLocaleString('en-US')} file${totalFiles != 1 ? 's' : ''} (${totalSizeFormatted}) in ${timeFormatted}`);
}
async function _createExampleBundlesRecursive(currentPath, outputPath, totalFiles = 0, totalSize = 0) {
  const items = await readDirectoryAsync(currentPath);

  if (items.every(item => item.isDirectory())) {
    for (const item of items) {
      const itemPath = path.join(currentPath, item.name);
      [totalFiles, totalSize] = await _createExampleBundlesRecursive(itemPath, outputPath, totalFiles, totalSize);
    }
    return [totalFiles, totalSize];
  }

  const currentPathSplit = currentPath.split('\\');
  const currentDirectoryName = currentPathSplit[currentPathSplit.length - 1];

  const outputData = {};

  if (items.every(item => item.isFile())) {
    for (const item of items) {
      const itemPath = path.join(currentPath, item.name);
      const data = await readFileAsync(itemPath);

      const itemNameMatch = item.name.match(new RegExp(`^${currentDirectoryName}\\.(?:(simple)\\.)?(ts|html|scss)$`))
      if (!itemNameMatch) {
        outputData[item.name] = data;
        continue;
      }

      const [_, simple, extension] = itemNameMatch;

      let itemKey = extension;
      if (simple) {
        itemKey = simple + extension.charAt(0).toUpperCase() + extension.slice(1);
      }
      outputData[extension] = data;
    }

    const filename = currentDirectoryName + '.ts';
    const fileOutputPath = path.join(outputPath, filename);
    const fileExportName = currentDirectoryName.replace(/-\w/g, match => match.charAt(1).toUpperCase());

    const dataToWrite = `export const ${fileExportName} = ${JSON.stringify(outputData)}`;

    await writeFileAsync(fileOutputPath, dataToWrite);

    const size = await getFileSize(fileOutputPath);
    const sizeFormatted = formatFileSize(size);

    totalFiles++;
    totalSize += size;

    console.info(chalk.green('✔ '), `Created ${filename} (${sizeFormatted}) containing ${items.length} file${items.length != 1 ? 's' : ''}`);

    return [totalFiles, totalSize];
  }

  const errorMessage = `All source subdirectories must contain exclusively folders or exclusively files. The directory ${currentPath} does not meet this criteria.`;
  console.error(chalk.red.bold('✕ '), `All source subdirectories must contain exclusively folders or exclusively files. The directory ${currentPath} does not meet this criteria.`);
  throw errorMessage;
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
})()

