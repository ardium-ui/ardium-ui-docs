import { SupportedLanguage } from 'src/app/components/code/code.types';
import { ExceptionsPageData } from 'src/app/components/exceptions-page/exceptions-page.types';

export const KeyboardServiceExceptionsData: ExceptionsPageData = {
  name: 'Keyboard Service',
  exceptions: [
    {
      name: 'KeyboardService',
      exceptions: [
        {
          code: 'DKT-NF0031',
          exceptionText:
            'A keyboard shortcut definition cannot contain two final keys. Got "<i>key1</i>" and "<i>key2</i>"; only the first one will be included.',
          description: [
            'This exception is thrown when a keyboard shortcut definition includes multiple final keys, which is not allowed.',
            'Only one final key can be part of a shortcut definition, and additional keys will be ignored.',
          ],
          exampleResults: [
            {
              code: `this.listenToShortcut(['Ctrl', 'A', 'B']);`,
              codeLanguage: SupportedLanguage.TS,
              result:
                'DKT-NF0031: A keyboard shortcut definition cannot contain two final keys. Got "A" and "B"; only the first one will be included.',
            },
          ],
        },
        {
          code: 'DKT-NF0032',
          exceptionText:
            'A keyboard shortcut definition that treats AltGraph as Alt+Ctrl cannot expect the user to press AltGraph and ControlRight keys (while not pressing ControlLeft), as pressing AltGraph automatically presses ControlLeft.',
          description: [
            'This exception occurs when a keyboard shortcut definition expects both AltGraph and ControlRight without ControlLeft, which is not possible.',
            'Since pressing AltGraph automatically activates ControlLeft, such a configuration is invalid. Listen to <code>"Ctrl"</code> instead (although listening to just AltGraph is usually enough).',
          ],
          exampleResults: [
            {
              code: `this.listenToShortcut(['AltGraph', 'ControlRight']);`,
              codeLanguage: SupportedLanguage.TS,
              result:
                'DKT-NF0032: A keyboard shortcut definition that treats AltGraph as Alt+Ctrl cannot expect the user to press AltGraph and ControlRight keys (while not pressing ControlLeft), as pressing AltGraph automatically presses ControlLeft.',
            },
          ],
        },
      ],
    },
  ],
};
