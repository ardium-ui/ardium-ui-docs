import fs from 'fs';
import path from 'path';
import { Timer } from '../../common/timer';
import { displayError, displaySuccess } from '../../common/utils';

const BASE_HREF_TAG = '<base href="/">';

const timer = new Timer();

const dirname = import.meta.dirname;

const outputDir = path.join(dirname, '../../../dist/ardium-ui-docs/browser/');
const indexHtmlPath = path.join(outputDir, 'index.html');

(() => {
  displaySuccess(`Found the index.html file. (${timer.toString()})`);
  timer.reset();

  if (!fs.existsSync(indexHtmlPath)) {
    displayError(`Cannot find index.html file. (${timer.toString()})`);
    return;
  }
  let content = fs.readFileSync(indexHtmlPath, { encoding: 'utf-8' });

  if (!content.match(BASE_HREF_TAG)) {
    displayError(`The index.html file doesn't contain matching <base> tag. (${timer.toString()})`);
    return;
  }
  content = content.replace(BASE_HREF_TAG, '<base href="/ardium-ui-docs/"/>');

  fs.writeFileSync(indexHtmlPath, content);

  displaySuccess(`Updated base href in index.html file. (${timer.toString()})`);
  timer.reset();

  fs.writeFileSync(path.join(outputDir, '404.html'), content);

  displaySuccess(`Copied index.html file to 404.html file. (${timer.toString()})`);
  timer.reset();

  const files = fs.readdirSync(outputDir);

  let fileCounter = 0;
  let replacedCounter = 0;
  for (const fileName of files) {
    if (fileName.endsWith('.js')) {
      fileCounter++;
      const fileWithDir = path.join(outputDir, fileName);
      let content = fs.readFileSync(fileWithDir, 'utf-8');

      const groups = content.match(new RegExp(',"/assets/', 'g'));
      replacedCounter += groups?.length ?? 0;

      content = content.replaceAll(',"/assets/', ',"/ardium-ui-docs/assets/');

      fs.writeFileSync(fileWithDir, content);
    }
  }
  displaySuccess(
    `Found ${fileCounter} .js files and replaced ${replacedCounter} assets links in them. (${timer.toString()})`
  );
})();
