const CODE_DATA: Record<string, string> = {
  'ARD-FT5030': '/components/kbd',

  'DKT-FT3000': '/devkit/custom-signals',
  'DKT-FT3001': '/devkit/custom-signals',
  'DKT-FT3010': '/devkit/custom-signals',
  'DKT-FT3011': '/devkit/custom-signals',
  'DKT-WA0020': '/devkit/http-service',
  'DKT-NF1000': '/devkit/infinite-scroll',
};

export function getExceptionCodePageUrl(code: string): string | null {
  code = code.toUpperCase();
  const codeUrl = CODE_DATA[code];
  if (!codeUrl) return null;
  return codeUrl + `/exceptions#${code}`;
}
