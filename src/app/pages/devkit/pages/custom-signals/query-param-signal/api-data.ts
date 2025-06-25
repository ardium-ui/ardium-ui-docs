import { ApiPageData } from 'src/app/components/api-page';

export const QueryParamSignalApiData: ApiPageData = {
  name: 'Query param signals',
  interfaces: [
    {
      name: 'QueryParamSignal',
      extends: 'WritableSignal<T>',
      typeParams: [
        {
          name: 'T',
          type: 'any',
          description:
            'The prefered type of the signal. Should only be used if the signal is supposed to be serializable.',
          required: false,
          default: 'implicit type based on the initial value',
        },
      ],
      properties: [
        {
          name: 'paramName',
          description: 'The name of the URL query param to be used.',
          type: 'string',
        },
      ],
      methods: [
        {
          name: 'clear()',
          description: 'Sets the signal value to <code>null</code> and removes the URL query param.',
          returnType: 'void',
        },
      ],
    },
    {
      name: 'QueryParamSignalOptions',
      description: 'The object containing the options when creating a query param signal.',
      typeParams: [
        {
          name: 'T',
          type: 'any',
          description:
            'The prefered type of the signal. Should only be used if the signal is supposed to be serializable.',
          required: false,
          default: 'implicit type based on the initial value',
        },
      ],
      properties: [
        {
          name: 'paramName',
          type: 'string',
          description: 'The name of the param to store the value under.</p><p>Required.',
        },
        {
          name: 'serialize',
          type: '(value: T | null) => string | null',
          description:
            'The function to use to serialize the value (prefered type -> string). If used, the <code>deserialize</code> function has to be specified as well.',
        },
        {
          name: 'deserialize',
          type: '(value: string) => T | null',
          description:
            'The function to use to deserialize the value (string -> prefered type). If used, the <code>serialize</code> function has to be specified as well.',
        },
      ],
    },
  ],
  functions: [
    {
      name: 'queryParamSignal',
      description: 'Creates a <code>WritableSignal</code> that synchronizes its value with a URL search param.',
      returnType: 'QueryParamSignal<T>',
      typeParams: [
        {
          name: 'T',
          type: 'any',
          description:
            'The prefered type of the signal. Should only be used if the signal is supposed to be serializable.',
          required: false,
          default: 'implicit type based on the initial value',
        },
      ],
      params: [
        {
          name: 'initialValue',
          type: 'T | null',
          description: 'The initial value for the signal. Will only be used if the specified param is not found.',
          required: true,
        },
        {
          name: 'optionsOrParam',
          type: 'string | QueryParamSignalOptions<T>',
          description:
            'Can either be a string specifying the param name to use or an object containing the configuration options for the signal.',
          required: true,
        },
      ],
    },
  ],
};
