

export const SupportedLanguage = {
  TS: 'typescript',
  CSS: 'scss',
  HTML: 'xml',
  PlainText: 'txt',
} as const;
export type SupportedLanguage = typeof SupportedLanguage[keyof typeof SupportedLanguage];