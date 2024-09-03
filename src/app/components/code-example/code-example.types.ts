import { Type } from '@angular/core';
import { KbdBasicExample } from 'src/examples/kbd/kbd-basic-example/kbd-basic-example';

export type CodeExampleData = {
  component?: Type<unknown>;
  html?: string;
  ts?: string;
  css?: string;
  scss?: string;
  simpleHtml?: string;
  simpleTs?: string;
  simpleScss?: string;
  simpleTxt?: string;
  other?: { [key: string]: string };
};

const test: CodeExampleData = { component: KbdBasicExample, html: '', ts: '' };
