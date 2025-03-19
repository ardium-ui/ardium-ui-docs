import fs from 'fs';
import path from 'path';
import { Timer } from '../../common/timer';
import { displayError, displaySuccess } from '../../common/utils';

const BASE_HREF_TAG = '<base href="/">';

const timer = new Timer();

const dirname = import.meta.dirname;

const indexHtmlPath = path.join(dirname, '../../../dist/ardium-ui-docs/browser/index.html');

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
})();
