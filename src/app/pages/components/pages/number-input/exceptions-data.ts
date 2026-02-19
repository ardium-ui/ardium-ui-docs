import { SupportedLanguage } from 'src/app/components/code/code.types';
import { ExceptionsPageData } from 'src/app/components/exceptions-page/exceptions-page.types';

export const NumberInputExceptionsData: ExceptionsPageData = {
  name: 'Number Input',
  exceptions: [
    {
      name: 'ArdiumNumberInputComponent',
      exceptions: [
        {
          code: 'ARD-FT0071a',
          exceptionText: "Cannot set <ard-number-input>'s [stepSize] to 0.",
          description: [
            'This exception is raised if the <code>[stepSize]</code> input is set to 0.',
            'The <code>[stepSize]</code> input must be a positive number greater than 0 to function correctly.',
          ],
        },
        {
          code: 'ARD-FT0071b',
          exceptionText: 'Cannot set <ard-number-input>\'s [stepSize] to a negative value, got "<i>step size</i>".',
          description: [
            'This exception is raised if the <code>[stepSize]</code> input is set to a negative value.',
            'The <code>[stepSize]</code> input must be a positive number greater than 0 to function correctly.',
          ],
          exampleResults: [
            {
              code: `<ard-number-input [stepSize]="-5"></ard-number-input>`,
              codeLanguage: SupportedLanguage.HTML,
              result: `ARD-FT0071b: Cannot set <ard-number-input>'s [stepSize] to a negative value, got -5.`,
            },
          ],
        },
      ],
    },
  ],
};
