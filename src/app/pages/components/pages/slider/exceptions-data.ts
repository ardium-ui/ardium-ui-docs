import { SupportedLanguage } from 'src/app/components/code/code.types';
import { ExceptionsPageData } from 'src/app/components/exceptions-page/exceptions-page.types';

export const SliderExceptionsData: ExceptionsPageData = {
  name: 'Slider',
  exceptions: [
    {
      name: 'ArdiumSliderComponent',
      exceptions: [
        {
          code: 'ARD-FT1051a',
          exceptionText: "ARD-FT1051a: Cannot set <ard-slider>'s [step] to 0.",
          description: [
            'This exception is thrown when the <code>[step]</code> input is set to <code>0</code>.',
            'A step of zero would result in invalid or infinite steps in a slider component, and is thus not permitted.',
          ],
          exampleResults: [
            {
              code: `<ard-slider [step]="0"></ard-slider>`,
              codeLanguage: SupportedLanguage.HTML,
              result: `ARD-FT1051a: Cannot set <ard-slider>'s [step] to 0.`,
            },
          ],
        },
        {
          code: 'ARD-FT1051b',
          exceptionText: "ARD-FT1051b: Cannot set <ard-slider>'s [step] to a negative value, got <i>step value</i>.",
          description: [
            'This exception is thrown when the <code>[step]</code> input is set to a negative number.',
            'The slider component does not support negative step sizes, as they would lead to incorrect behavior.',
          ],
          exampleResults: [
            {
              code: `<ard-slider [step]="-5"></ard-slider>`,
              codeLanguage: SupportedLanguage.HTML,
              result: `ARD-FT1051b: Cannot set <ard-slider>'s [step] to a negative value, got -5.`,
            },
          ],
        },
        {
          code: 'ARD-FT1050',
          exceptionText:
            "ARD-FT1050: Cannot set <ard-slider>'s [min] to a value greater than or equal to [max], got min=<i>min value</i> and max=<i>max value</i>.",
          description: [
            'This exception is thrown when the <code>[min]</code> input is greater than or equal to the <code>[max]</code> input.',
            'The <code>min</code> value must be strictly less than the <code>max</code> value in order for the slider to function correctly.',
          ],
          exampleResults: [
            {
              code: `<ard-slider [min]="100" [max]="50"></ard-slider>`,
              codeLanguage: SupportedLanguage.HTML,
              result: `ARD-FT1050: Cannot set <ard-slider>'s [min] to a value greater than or equal to [max], got min=100 and max=50.`,
            },
          ],
        },
      ],
    },
    {
      name: 'ArdiumRangeSliderComponent',
      exceptions: [
        {
          code: 'ARD-FT1061a',
          exceptionText: "ARD-FT1061a: Cannot set <ard-range-slider>'s [step] to 0.",
          description: [
            'This exception is thrown when the <code>[step]</code> input is set to <code>0</code>.',
            'A step of zero would result in invalid or infinite steps in a slider component, and is thus not permitted.',
          ],
          exampleResults: [
            {
              code: `<ard-range-slider [step]="0"></ard-range-slider>`,
              codeLanguage: SupportedLanguage.HTML,
              result: `ARD-FT1061a: Cannot set <ard-range-slider>'s [step] to 0.`,
            },
          ],
        },
        {
          code: 'ARD-FT1061b',
          exceptionText: "ARD-FT1061b: Cannot set <ard-range-slider>'s [step] to a negative value, got <i>step value</i>.",
          description: [
            'This exception is thrown when the <code>[step]</code> input is set to a negative number.',
            'The slider component does not support negative step sizes, as they would lead to incorrect behavior.',
          ],
          exampleResults: [
            {
              code: `<ard-range-slider [step]="-5"></ard-range-slider>`,
              codeLanguage: SupportedLanguage.HTML,
              result: `ARD-FT1061b: Cannot set <ard-range-slider>'s [step] to a negative value, got -5.`,
            },
          ],
        },
        {
          code: 'ARD-FT1060',
          exceptionText:
            "ARD-FT1060: Cannot set <ard-range-slider>'s [min] to a value greater than or equal to [max], got min=<i>min value</i> and max=<i>max value</i>.",
          description: [
            'This exception is thrown when the <code>[min]</code> input is greater than or equal to the <code>[max]</code> input.',
            'The <code>min</code> value must be strictly less than the <code>max</code> value in order for the slider to function correctly.',
          ],
          exampleResults: [
            {
              code: `<ard-range-slider [min]="100" [max]="50"></ard-range-slider>`,
              codeLanguage: SupportedLanguage.HTML,
              result: `ARD-FT1060: Cannot set <ard-range-slider>'s [min] to a value greater than or equal to [max], got min=100 and max=50.`,
            },
          ],
        },
      ],
    },
  ],
};
