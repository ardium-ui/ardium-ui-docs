import { ApiPageData } from 'src/app/components/api-page';

export const PersistentSignalApiData: ApiPageData = {
  name: 'Persistent signal',
  interfaces: [
    {
      name: 'PersistentSignal',
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
          name: 'method',
          description: 'The method of persistent storage.',
          type: 'PersistentStorageMethod',
        },
        {
          name: 'key',
          description: 'The key used to persist the value under.',
          type: 'string',
        },
      ],
      methods: [
        {
          name: 'clear()',
          description: 'Sets the signal value to <code>null</code> and removes the value from the persistent storage.',
          returnType: 'void',
        },
      ],
    },
    {
      name: 'PersistentSignalOptions',
      description: 'The object containing the options when creating a persistent signal.',
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
          name: 'name',
          type: 'string',
          description: 'The name of the key to store the value under.</p><p>Required.',
        },
        {
          name: 'method',
          type: 'PersistentStorageMethod',
          description: 'The type of persistent storage to use.</p><p>Required.',
        },
        {
          name: 'expires',
          type: 'Date | string | undefined',
          description:
            'The expiry date of the cookie in UTC date string format. Only used if the storage method is set to cookies, otherwise ignored.',
        },
        {
          name: 'maxAge',
          type: 'number | undefined',
          description:
            "The cookie's maximum age in seconds. Only used if the storage method is set to cookies, otherwise ignored.",
        },
        {
          name: 'path',
          type: 'string | undefined',
          description:
            "The cookie's path attribute. Only used if the storage method is set to cookies, otherwise ignored.",
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
      name: 'persistentSignal',
      description: 'Creates a <code>WritableSignal</code> that persists its value using the specified storage method.',
      returnType: 'PersistentSignal<T>',
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
          description:
            'The initial value for the signal. Will only be used if there is no value in the persistent storage.',
          required: true,
        },
        {
          name: 'options',
          type: 'PersistentSignalOptions<T>',
          description: 'The configuration options for the signal.',
          required: true,
        },
      ],
    },
  ],
  enums: [
    {
      name: 'PersistentStorageMethod',
      description:
        'An object-based enum containing the available types of persistent storage used by the persistent signal.',
      definition: `export const PersistentStorageMethod = {
  Cookies: 'cookies',
  LocalStorage: 'local-storage',
  SessionStorage: 'session-storage',
} as const;
export type PersistentStorageMethod = (typeof PersistentStorageMethod)[keyof typeof PersistentStorageMethod];`,
    },
  ],
};
