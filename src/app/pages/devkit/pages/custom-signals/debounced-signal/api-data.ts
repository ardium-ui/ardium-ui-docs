import { ApiPageData } from 'src/app/components/api-page';

export const DebouncedSignalApiData: ApiPageData = {
  name: 'Debounced signal',
  interfaces: [
    {
      name: 'DebouncedSignal',
      extends: 'WritableSignal<T>',
      typeParams: [
        {
          name: 'T',
          type: 'any',
          description: 'The type of the value to be stored.',
          required: false,
          default: 'implicit type based on the initial value',
        },
      ],
      properties: [
        {
          name: 'debounceTime',
          description: 'The debounce period of the signal.',
          type: 'number',
        },
      ],
    },
  ],
  functions: [
    {
      name: 'debouncedSignal',
      description:
        'Creates a <code>WritableSignal</code> that delays updates to its value based on a specified debounce time.',
      returnType: 'QueryParamSignal<T>',
      typeParams: [
        {
          name: 'T',
          type: 'any',
          description: 'The type of the value to be stored.',
          required: false,
          default: 'implicit type based on the initial value',
        },
      ],
      params: [
        {
          name: 'initialValue',
          type: 'T | null',
          description: 'The initial value for the signal.',
          required: true,
        },
        {
          name: 'debounceTime',
          type: 'number',
          description: 'The debounce period, in milliseconds.',
          required: true,
        },
      ],
    },
  ],
};
