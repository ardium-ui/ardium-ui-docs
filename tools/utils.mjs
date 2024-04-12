import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

export function makeSuccess() {
  return chalk.green('✔ ');
}
export function makeError() {
  return chalk.red.bold('✕ ') + chalk.bgRed.white('[ERROR] ');
}

/**
 * Asynchronously gets the size of a file.
 * @param {string} filePath - The path to the file.
 * @returns {Promise<number>} The size of the file in bytes.
 */
export async function getFileSize(filePath) {
  try {
    const stats = await fs.stat(filePath);
    return stats.size;
  } catch (err) {
    console.error(`Error getting file size for ${filePath}:\n`, err);
    throw '';
  }
}

export async function readFileAsync(filePath) {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch (err) {
    console.error(makeError(), `Error reading file ${filePath}:\n`, readErr);
    throw '';
  }
}

export async function writeFileAsync(filePath, data) {
  try {
    await fs.writeFile(filePath, data, 'utf8');
  } catch (err) {
    console.error(makeError(), `Error writing file ${filePath}:\n`, err);
    throw '';
  }
}

export async function deleteDirectoryAsync(directoryPath) {
  try {
    await fs.rm(directoryPath, { recursive: true, force: true });
    return true;
  } catch (err) {
    console.error(makeError(), `Error while removing the directory ${directoryPath}:\n`, err);
    return false;
  }
}

export async function createDirectoryAsync(directoryPath) {
  try {
    await fs.mkdir(directoryPath, { recursive: true });
    return true;
  } catch (err) {
    console.error(makeError(), `Error while creating the directory:\n`, err);
    return false;
  }
}

export async function readDirectoryAsync(directoryPath) {
  try {
    return await fs.readdir(directoryPath, { withFileTypes: true });
  } catch (err) {
    console.error(makeError(), `Error reading the directory:\n`, err);
    throw '';
  }
}
/**
 * Formats the duration from milliseconds to a more readable format (ms, s, min, h, etc.).
 * @param {number} milliseconds - The duration in milliseconds.
 * @returns {string} The formatted duration.
 */
export function formatDuration(milliseconds) {
  if (milliseconds < 1000) return `${milliseconds} ms`;

  let seconds = milliseconds / 1000;
  if (seconds < 60) return `${seconds.toFixed(3)} s`;

  let minutes = seconds / 60;
  if (minutes < 60) return `${minutes.toFixed(2)} min`;

  let hours = minutes / 60;
  if (hours < 24) return `${hours.toFixed(2)} h`;

  let days = hours / 24;
  if (days < 365) return `${days.toFixed(2)} d`;

  let years = days / 365;
  return `${years.toFixed(2)} y`;
}

/**
 * Formats the size of a file from bytes to a more readable format (KB, MB, etc.).
 * @param {number} bytes - The size of the file in bytes.
 * @param {number} decimals - Number of decimal places to include in the formatted output.
 * @returns {string} The formatted file size.
 */
export function formatFileSize(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1000;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}