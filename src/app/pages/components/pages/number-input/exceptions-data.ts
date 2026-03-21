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
              result: `ARD-FT0071b: Cannot set <ard-number-input>'s [stepSize] to a negative value, got "-5".`,
            },
          ],
        },
        {
          code: 'ARD-FT0071c',
          exceptionText:
            '<ard-number-input>\'s [stepSize] must be an integer when [allowFloat] is false, got "<i>step size</i>".',
          description: [
            'This exception is raised if the <code>[stepSize]</code> input is set to a non-integer value while the <code>[allowFloat]</code> input is set to false.',
            'When <code>[allowFloat]</code> is false, the <code>[stepSize]</code> input must be an integer to ensure that the number input only allows whole numbers.',
          ],
          exampleResults: [
            {
              code: `<ard-number-input [stepSize]="0.5" [allowFloat]="false"></ard-number-input>`,
              codeLanguage: SupportedLanguage.HTML,
              result: `ARD-FT0071c: <ard-number-input>'s [stepSize] must be an integer when [allowFloat] is false, got "0.5".`,
            },
          ],
        },
        {
          code: 'ARD-FT0072a',
          exceptionText:
            'Cannot set <ard-number-input>\'s [maxDecimalPlaces] to a negative value, got "<i>maxDecimalPlaces</i>".',
          description: [
            'This exception is raised if the <code>[maxDecimalPlaces]</code> input is set to a negative value.',
            'The <code>[maxDecimalPlaces]</code> input must be a non-negative integer to function correctly.',
          ],
          exampleResults: [
            {
              code: `<ard-number-input [maxDecimalPlaces]="-5"></ard-number-input>`,
              codeLanguage: SupportedLanguage.HTML,
              result: `ARD-FT0072a: Cannot set <ard-number-input>'s [maxDecimalPlaces] to a negative value, got "-5".`,
            },
          ],
        },
        {
          code: 'ARD-FT0072b',
          exceptionText:
            'Cannot set <ard-number-input>\'s [maxDecimalPlaces] to a non-integer value, got "<i>maxDecimalPlaces</i>".',
          description: [
            'This exception is raised if the <code>[maxDecimalPlaces]</code> input is set to a non-integer value.',
            'The <code>[maxDecimalPlaces]</code> input must be a non-negative integer to function correctly.',
          ],
          exampleResults: [
            {
              code: `<ard-number-input [maxDecimalPlaces]="0.5"></ard-number-input>`,
              codeLanguage: SupportedLanguage.HTML,
              result: `ARD-FT0072b: Cannot set <ard-number-input>'s [maxDecimalPlaces] to a non-integer value, got "0.5".`,
            },
          ],
        },
        {
          code: 'ARD-FT0073',
          exceptionText:
            '<ard-number-input>\'s [decimalSeparator] must be a single character, got "<i>decimalSeparator</i>".',
          description: [
            'This exception is raised if the <code>[decimalSeparator]</code> input is set to a value that is not a single character.',
            'The <code>[decimalSeparator]</code> input must be a single character to function correctly, otherwise the number syntax handlers may not work as expected.',
          ],
          exampleResults: [
            {
              code: `<ard-number-input decimalSeparator=",,"></ard-number-input>`,
              codeLanguage: SupportedLanguage.HTML,
              result: `ARD-FT0073: <ard-number-input>'s [decimalSeparator] must be a single character, got ",,".`,
            },
          ],
        },
      ],
    },
  ],
};
