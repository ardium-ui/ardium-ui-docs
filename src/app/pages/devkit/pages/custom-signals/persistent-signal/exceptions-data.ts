import { ExceptionsPageData } from 'src/app/components/exceptions-page/exceptions-page.types';

export const PersistentSignalExceptionsData: ExceptionsPageData = {
  name: 'Persistent signal',
  exceptions: [
    {
      name: 'persistentSignal',
      exceptions: [
        {
          code: 'DKT-FT3000',
          exceptionText: 'Both serialize and deserialize must either be both defined or both undefined.',
          description: [
            "This exceptions is raised if a signal's options object contains only <code>serialize</code> or only <code>deserialize</code> function definitions.",
            'For the signal to work properly, both <code>serialize</code> and <code>deserialize</code> must be defined.',
          ],
        },
        {
          code: 'DKT-FT3001',
          exceptionText:
            'Non-string initial values are only allowed for serializable signals. Define serialization options.',
          description: [
            'This exceptions is raised if a non-serializable signal is given an initial value other than a string or <code>null</code>',
            'To fix this issue either define the serialization options or change the initial value to a string or <code>null</code>',
          ],
        },
      ],
    },
  ],
};
