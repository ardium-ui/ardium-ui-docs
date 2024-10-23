import yargs from "yargs";
import { hideBin } from 'yargs/helpers';

interface Args {
  inPath: string;
  outPath: string;
}

export default yargs(hideBin(process.argv))
  .option('in-path', {
    description: 'Path to the input directory',
    type: 'string',
    demandOption: true,
  })
  .option('out-path', {
    description: 'Path to the output directory',
    type: 'string',
    demandOption: true,
  })
  .help()
  .alias('help', 'h')
  .parseSync() as Args;