

export const SupportedLanguage = {
  TS: 'typescript',
  CSS: 'scss',
  HTML: 'xml',
} as const;
export type SupportedLanguage = typeof SupportedLanguage[keyof typeof SupportedLanguage];