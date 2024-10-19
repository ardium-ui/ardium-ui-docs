import { Type } from '@angular/core';

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
