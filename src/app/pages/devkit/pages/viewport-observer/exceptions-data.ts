import { SupportedLanguage } from 'src/app/components/code/code.types';
import { ExceptionsPageData } from 'src/app/components/exceptions-page/exceptions-page.types';

export const ViewportObserverExceptionsData: ExceptionsPageData = {
  name: 'Viewport Observer',
  exceptions: [
    {
      name: 'ArdiumViewportObserverService',
      exceptions: [
        {
          code: 'DKT-NF0001',
          exceptionText: 'Trying to observe an element by id, but the element with id "<i>id</i>" does not exist.',
          description: [
            'This exception is thrown when the method <code>observeById</code> is called with an <i>id</i> that does not match any element in the document.',
            'The service attempts to observe an element by its id but fails if no such element is found in the DOM.',
          ],
          exampleResults: [
            {
              code: `const viewportService = inject(ArdiumViewportObserverService);

const observer = viewportService.observeById('non-existent-id'); // <-- this produces the exception
`,
              codeLanguage: SupportedLanguage.TS,
              result:
                'DKT-NF0001: Trying to observe an element by id, but the element with id "non-existent-id" does not exist.',
            },
          ],
        },
        {
          code: 'DKT-NF0002',
          exceptionText: 'Trying to observe an element by query, but no element matching "<i>query</i>" exists.',
          description: [
            'This exception is thrown when the method <code>observeByQuery</code> is called with a <i>query</i> that does not match any element in the document.',
            'The service attempts to observe an element by its query selector but fails if no such element is found in the DOM.',
          ],
          exampleResults: [
            {
              code: `const viewportService = inject(ArdiumViewportObserverService);

const observer = viewportService.observeByQuery('.non-existent-class'); // <-- this produces the exception
`,
              codeLanguage: SupportedLanguage.TS,
              result:
                'DKT-NF0002: Trying to observe an element by query, but no element matching ".non-existent-class" exists.',
            },
          ],
        },
      ],
    },
  ],
};
