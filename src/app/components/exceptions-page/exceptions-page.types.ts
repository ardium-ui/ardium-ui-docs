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
}
