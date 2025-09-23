import Case from 'case';
import inquirer from 'inquirer';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getLastRunArgs, saveCurrentRunArgs } from './last-run';

export const Library = {
  UI: 'ui',
  Devkit: 'devkit',
} as const;
export type Library = (typeof Library)[keyof typeof Library];

export interface Args {
  library: Library;
  componentName: string;
  exampleName: string;
  files: string[];
}

const argv = yargs(hideBin(process.argv))
  .option('library', {
    description: 'The library the example is about',
    type: 'string',
    choices: ['devkit', 'components'],
    alias: 'l',
  })
  .option('component-name', {
    description: 'The name of the component the example is about',
    type: 'string',
    alias: 'c',
  })
  .option('example-name', {
    description: 'The name of the specific example',
    type: 'string',
    alias: 'e',
  })
  .option('files', {
    type: 'array',
    description: 'The types of files to be generated',
    alias: 'f',
    array: true,
    choices: ['ts', 'html', 'scss'],
  })
  .help()
  .alias('help', 'h')
  .parseSync() as Args;

const lastRunArgs = getLastRunArgs();

export async function getArgs() {
  let { library, componentName, exampleName, files } = argv;
  const areFilesDefined = Array.isArray(files) && files.length > 0;

  if (!library || !componentName || !exampleName || !areFilesDefined) {
    const anwsers = await inquirer.prompt([
      {
        type: 'list',
        name: 'library',
        message: 'Select target library: ',
        choices: ['components', 'devkit'],
        default: lastRunArgs?.library ?? 'devkit',
        when: !library,
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name: ',
        required: true,
        default: lastRunArgs?.componentName,
        when: !componentName,
      },
      {
        type: 'input',
        name: 'exampleName',
        message: 'Example name: ',
        required: false,
        default: lastRunArgs?.exampleName,
        when: exampleName === undefined,
      },
      {
        type: 'checkbox',
        name: 'files',
        message: 'File types: ',
        choices: ['html', 'scss', 'ts'],
        default: lastRunArgs?.files ?? ['html', 'scss', 'ts'],
        when: !Array.isArray(files) || !files.length,
      },
    ]);
    library ||= anwsers.library;
    componentName ||= anwsers.componentName;
    exampleName ??= anwsers.exampleName;
    files = (Array.isArray(files) && files.length > 0 ? files : anwsers.files) ?? [];
  }

  const finalArgs: Args = { library, componentName, exampleName, files: files.map(Case.lower) };

  saveCurrentRunArgs(finalArgs);

  return finalArgs;
}
