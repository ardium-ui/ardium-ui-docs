export const EXCEPTION_SEVERITY_MAP = {
  FT: 'Fatal',
  NF: 'Non-Fatal',
  IS: 'Impossible State',
  WA: 'Warning',
} as const;
export type ExceptionSeverity = keyof typeof EXCEPTION_SEVERITY_MAP;
