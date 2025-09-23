import fs from 'fs';
import path from 'path';
import { Args } from './args';

const dirname = import.meta.dirname;
const filePath = path.join(dirname, './last-run.json')

export function getLastRunArgs(): Args | null {
  try {
    const lastRunFile = fs.readFileSync(filePath, 'utf-8');
    const lastRun = JSON.parse(lastRunFile) as Args;
    return lastRun;
  } catch (error) {
    return null;
  }
}

export function saveCurrentRunArgs(args: Args): void {
  fs.writeFileSync(filePath, JSON.stringify(args), 'utf-8');
}
