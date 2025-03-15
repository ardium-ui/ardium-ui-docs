import ansis from 'ansis';
import path from 'path';
import { table } from 'table';
import { fileURLToPath } from 'url';
import { displayError, getFileSize, readDirectoryAsync } from '../../../common/utils.js';
import { Timer } from '../timer.js';
import { TotalsMeter } from '../totals.js';
import argv from './argv.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = __dirname.split('ardium-ui-docs')[0] + 'ardium-ui-docs';
const sourceDir = path.join(rootDir, 'example-bundler', argv.inPath);

type Stats = Record<string, TotalsMeter>;

(async () => {
  const timer = new Timer();
  const stats: Stats = {};

  try {
    await _readStatsRecursive(sourceDir, stats);
    _displayStats(stats);
  } catch (error) {}

  timer.end();
  console.info(`Finished in ${timer.toString()}`);
})();

async function _readStatsRecursive(currentPath: string, stats: Stats): Promise<void> {
  const items = await readDirectoryAsync(currentPath);

  if (items.every(item => item.isDirectory())) {
    for (const item of items) {
      const itemPath = path.join(currentPath, item.name);
      await _readStatsRecursive(itemPath, stats);
    }
    return;
  }
  if (items.every(item => item.isFile())) {
    for (const item of items) {
      const ext = item.name.match(/(?:\.simple)?\.[a-z\d]+$/gi)?.[0];
      const itemPath = path.join(currentPath, item.name);

      if (!ext) {
        displayError(`Cannot read the extension of file ${itemPath.replace(rootDir, '')}`);
        throw new Error();
      }

      const size = await getFileSize(itemPath);

      if (!(ext in stats)) {
        stats[ext] = new TotalsMeter();
      }
      stats[ext].addFile(size);
    }
    return;
  }

  displayError(
    `All source subdirectories must contain exclusively folders or exclusively files. The directory ${currentPath.replace(
      rootDir,
      ''
    )} does not meet this criteria.`
  );
  throw new Error();
}

function _mapExtension(ext: string): string {
  if (ext.indexOf('.') === -1) return ext;
  return ext.toUpperCase().replace('.SIMPLE.', 'Simple ').replaceAll('.', '');
}
function _colorNumber(str: string): string {
  return str.replace(/(\d+(?:\.\d+)?)/g, ansis.yellowBright('$1'));
}

const HEADERS = [
  ansis.hex('#0FF')('Extension'),
  ansis.hex('#0FF')('Total files'),
  ansis.hex('#0FF')('Total size'),
  ansis.hex('#0FF')('Size %'),
];

const CONFIG = {
  border: {
    topBody: ansis.hex('#555')('═'),
    topJoin: ansis.hex('#555')('╤'),
    topLeft: ansis.hex('#555')('╔'),
    topRight: ansis.hex('#555')('╗'),
    bottomBody: ansis.hex('#555')('═'),
    bottomJoin: ansis.hex('#555')('╧'),
    bottomLeft: ansis.hex('#555')('╚'),
    bottomRight: ansis.hex('#555')('╝'),
    bodyLeft: ansis.hex('#555')('║'),
    bodyRight: ansis.hex('#555')('║'),
    bodyJoin: ansis.hex('#555')('│'),
    joinBody: ansis.hex('#555')('─'),
    joinLeft: ansis.hex('#555')('╟'),
    joinRight: ansis.hex('#555')('╢'),
    joinJoin: ansis.hex('#555')('┼'),
  },
  drawHorizontalLine: (index: number, size: number) =>
    index === 0 || index === 1 || index === size - 1 || index === size,
};

function _displayStats(stats: Stats): void {
  const rawStatsData = Object.entries(stats).sort((a, b) => b[1].size - a[1].size);
  const [totalFiles, totalSize] = rawStatsData.reduce<[number, number]>(
    (acc, v) => [acc[0] + v[1].files, acc[1] + v[1].size],
    [0, 0]
  );
  const totals = new TotalsMeter(totalFiles, totalSize);
  const statsData = [...rawStatsData, ['Total', totals] as const].map(v => [
    _mapExtension(v[0]),
    _colorNumber(v[1].totalString()),
    _colorNumber(v[1].sizeString()),
    `${Math.round((v[1].size / totalSize) * 1000) / 10}%`,
  ]);

  console.log(table([HEADERS, ...statsData], CONFIG));
}
