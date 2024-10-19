import { ApiPageData } from 'src/app/components/api-page';

export const CoercionApiData: ApiPageData = {
  name: 'Coercion',
  functions: [
    {
      name: 'coerceArrayProperty',
      description:
        'Coerces a value to an array of trimmed non-empty strings. Any input that is not an array, <code>null</code> or <code>undefined</code> will be turned into a string using <code>String()</code> and split into an array with the given separator. <code>null</code>, <code>undefined</code>, and <code>""</code> will result in an empty array.',
      returnType: 'string[]',
      params: [
        {
          name: 'value',
          description: 'The value to be coerced.',
          type: 'any',
          required: true,
        },
        {
          name: 'separator',
          description: 'The separator used to split the string with.',
          type: 'string | RegExp',
          required: false,
          default: '","',
        },
      ],
    },
    {
      name: 'coerceBooleanProperty',
      description: 'Coerces a data-bound value (typically a string) to a boolean.',
      returnType: 'boolean',
      params: [
        {
          name: 'value',
          description: 'The value to be coerced.',
          required: true,
          type: 'any',
        },
      ],
    },
    {
      name: 'coerceDateProperty',
      description: 'Coerces a data-bound value (typically a string) to a Date.',
      returnType: 'Date | T',
      typeParams: [
        {
          name: 'T',
          description: 'The type of the fallback value to be used.',
          required: false,
          default: 'Infered from the <code>fallback</code> parameter.',
        },
      ],
      params: [
        {
          name: 'value',
          description: 'The value to be coerced.',
          required: true,
          type: 'any',
        },
        {
          name: 'fallback',
          description: 'The value to use if the coercion fails.',
          required: true,
          type: 'T (infered)',
        },
      ],
    },
    {
      name: 'coerceNumberProperty',
      description: 'Coerces a data-bound value (typically a string) to a number.',
      overloads: [
        {
          description: 'Coerces a data-bound value (typically a string) to a number.',
          returnType: 'number | undefined',
          params: [
            {
              name: 'value',
              description: 'The value to be coerced.',
              required: true,
              type: 'any',
            },
          ],
        },
        {
          description: 'Coerces a data-bound value (typically a string) to a number.',
          returnType: 'number | undefined',
          typeParams: [
            {
              name: 'D',
              description: 'The type of the fallback value to be used.',
              required: false,
              default: 'Infered from the <code>fallback</code> parameter.',
            },
          ],
          params: [
            {
              name: 'value',
              description: 'The value to be coerced.',
              required: true,
              type: 'any',
            },
            {
              name: 'fallback',
              description: 'The value to use if the coercion fails.',
              required: true,
              type: 'D (infered)',
            },
          ],
        },
      ],
    },
  ],
};
