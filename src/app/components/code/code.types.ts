

export const SupportedLanguage = {
  TS: 'typescript',
  SCSS: 'scss',
  HTML: 'xml',
  PlainText: 'txt',
} as const;
export type SupportedLanguage = typeof SupportedLanguage[keyof typeof SupportedLanguage];