import { ApiPageData } from 'src/app/components/api-page';

export const ThrottledSignalApiData: ApiPageData = {
  name: 'Throttled signal',
  interfaces: [
    {
      name: 'ThrottledSignal',
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
          name: 'throttleTime',
          description: 'The throttle period of the signal.',
          type: 'number',
        },
      ],
    },
  ],
  functions: [
    {
      name: 'throttledSignal',
      description:
        'Creates a <code>WritableSignal</code> that limits updates to its value based on a specified throttle interval.',
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
          name: 'throttleTime',
          type: 'number',
          description: 'The throttle interval, in milliseconds.',
          required: true,
        },
      ],
    },
  ],
};
