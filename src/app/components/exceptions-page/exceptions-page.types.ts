import { SupportedLanguage } from "../code/code.types";

export interface ExceptionsPageData {
  name: string;
  exceptions?: ExceptionGroupData[];
}

export interface ExceptionGroupData {
  name: string;
  exceptions: ExceptionData[];
}

export interface ExceptionData {
  code: string;
  exceptionText: string;
  description: string | string[];
  exampleResults?: ExceptionExampleResult[];
}

export interface ExceptionExampleResult {
  code: string;
  codeLanguage: SupportedLanguage;
  result: string;
}