import Case from 'case';
import fsExtra from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { displaySuccess, writeFileAsync } from '../../common/utils.js';
import { getArgs } from './args.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = __dirname.split('ardium-ui-docs')[0] + 'ardium-ui-docs';

(async () => {
  const { library, componentName, exampleName, files } = await getArgs();

  const actualComponentName = componentName.split('/').at(-1);
  const nameOfFiles = Case.kebab([actualComponentName, exampleName, 'example'].join('-'));
  const directory = path.join(library, componentName, nameOfFiles).toLowerCase();

  const directoryInProject = path.join('src', 'examples', directory);
  const fullDirectory = path.join(rootDir, directoryInProject);

  await fsExtra.ensureDir(fullDirectory);

  if (files.includes('html')) {
    const file = path.join(directoryInProject, nameOfFiles + '.html');
    await writeFileAsync(path.join(rootDir, file), `<p>${nameOfFiles} works!</p>`);
    displaySuccess(`Created ${file}`);
  }
  if (files.includes('scss')) {
    const file = path.join(directoryInProject, nameOfFiles + '.scss');
    await writeFileAsync(path.join(rootDir, file), '');
    displaySuccess(`Created ${file}`);
  }
  if (files.includes('ts')) {
    const className = Case.pascal(nameOfFiles);
    const file = path.join(directoryInProject, nameOfFiles + '.ts');

    await writeFileAsync(
      path.join(rootDir, file),
      `import { Component } from '@angular/core';

@Component({
  selector: '${nameOfFiles}',${files.includes('html') ? "\n  templateUrl: './" + nameOfFiles + ".html'," : ''}${
        files.includes('scss') ? "\n  styleUrl: './" + nameOfFiles + ".scss'," : ''
      }
  standalone: true,
  imports: [],
})
export class ${className} {
  
}
`
    );
    displaySuccess(`Created ${file}`);
  }
})();
