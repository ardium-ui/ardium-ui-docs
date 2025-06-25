import { ApiPageData } from 'src/app/components/api-page';

export const MapSignalApiData: ApiPageData = {
  name: 'Map signal',
  functions: [
    {
      name: 'mapSignal',
      description: 'Creates a writable, reactive Map signal with full Map-like API and helpers.',
      params: [
        {
          name: 'initialValue',
          type: 'Iterable<[K, V]>',
          description: 'Initial map contents, as entries or another Map.',
          default: '[]',
          required: false,
        },
      ],
      typeParams: [
        {
          name: 'K',
          type: 'any',
          description: 'The type of keys in the map.',
        },
        {
          name: 'V',
          type: 'any',
          description: 'The type of values in the map.',
        },
      ],
      returnType: 'WritableMapSignal<K, V>',
    },
  ],
  interfaces: [
    {
      name: 'MapSignal<K, V>',
      description: 'A read-only map signal with non-mutating methods.',
      methods: [
        {
          name: '()',
          description: 'Returns the current map instance.',
          returnType: 'Map<K, V>',
        },
        {
          name: 'isEmpty',
          description: 'Computed signal that returns <code>true</code> if the map is empty.',
          returnType: 'boolean',
        },
        {
          name: 'size',
          description: 'Computed signal that returns the size of the map.',
          returnType: 'number',
        },
        {
          name: 'get',
          description: 'Gets the value for a key, or <code>undefined</code>.',
          params: [
            {
              name: 'key',
              type: 'K',
              description: 'The key to retrieve the value for.',
            },
          ],
          returnType: 'V | undefined',
        },
        {
          name: 'has',
          description: 'Checks if a key exists in the map.',
          params: [
            {
              name: 'key',
              type: 'K',
              description: 'The key to check for.',
            },
          ],
          returnType: 'boolean',
        },
        {
          name: 'entriesArray',
          description: 'Computed signal that returns an array of [key, value] entries.',
          returnType: '[K, V][]',
        },
        {
          name: 'keysArray',
          description: 'Computed signal that returns an array of keys.',
          returnType: 'K[]',
        },
        {
          name: 'valuesArray',
          description: 'Computed signal that returns an array of values.',
          returnType: 'V[]',
        },
      ],
      typeParams: [
        {
          name: 'K',
          type: 'any',
          description: 'The type of keys in the map.',
        },
        {
          name: 'V',
          type: 'any',
          description: 'The type of values in the map.',
        },
      ],
    },
    {
      name: 'WritableMapSignal<K, V>',
      description: 'A writable map signal with mutating and non-mutating methods.',
      methods: [
        {
          name: '()',
          description: 'Returns the current map instance.',
          returnType: 'Map<K, V>',
        },
        {
          name: 'isEmpty',
          description: 'Computed signal that returns <code>true</code> if the map is empty.',
          returnType: 'boolean',
        },
        {
          name: 'size',
          description: 'Computed signal that returns the size of the map.',
          returnType: 'number',
        },
        {
          name: 'get',
          description: 'Gets the value for a key, or <code>undefined</code>.',
          params: [
            {
              name: 'key',
              type: 'K',
              description: 'The key to retrieve the value for.',
            },
          ],
          returnType: 'V | undefined',
        },
        {
          name: 'has',
          description: 'Checks if a key exists in the map.',
          params: [
            {
              name: 'key',
              type: 'K',
              description: 'The key to check for.',
            },
          ],
          returnType: 'boolean',
        },
        {
          name: 'entriesArray',
          description: 'Computed signal that returns an array of [key, value] entries.',
          returnType: '[K, V][]',
        },
        {
          name: 'keysArray',
          description: 'Computed signal that returns an array of keys.',
          returnType: 'K[]',
        },
        {
          name: 'valuesArray',
          description: 'Computed signal that returns an array of values.',
          returnType: 'V[]',
        },
        {
          name: 'asReadonly',
          description: 'Returns a read-only version of the map signal.',
          returnType: 'MapSignal<K, V>',
        },
        {
          name: 'setKey',
          description: 'Sets a value for the specified key.',
          params: [
            {
              name: 'key',
              type: 'K',
              description: 'The key to set.',
            },
            {
              name: 'value',
              type: 'V',
              description: 'The value to associate with the key.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'delete',
          description: 'Deletes a key from the map. Returns <code>true</code> if a value was removed.',
          params: [
            {
              name: 'key',
              type: 'K',
              description: 'The key to delete.',
            },
          ],
          returnType: 'boolean',
        },
        {
          name: 'clear',
          description: 'Clears the map.',
          returnType: 'void',
        },
        {
          name: 'setMap',
          description: 'Replaces the map with a new map.',
          params: [
            {
              name: 'value',
              type: 'Map<K, V>',
              description: 'The new map instance to replace the current map.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'set',
          description: 'Alias of <code>setMap()</code>.',
          params: [
            {
              name: 'value',
              type: 'Map<K, V>',
              description: 'The new map instance to replace the current map.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'update',
          description: 'Updates the map using an update function.',
          params: [
            {
              name: 'updateFn',
              type: '(current: Map<K, V>) => Map<K, V>',
              description: 'Function that receives the current map and returns a new map.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'updateAt',
          description: 'Updates the value for a key using the provided update function if the key exists.',
          params: [
            {
              name: 'key',
              type: 'K',
              description: 'The key to update.',
            },
            {
              name: 'updateFn',
              type: '(current: V) => V',
              description: 'The function to apply to the current value.',
            },
          ],
          returnType: 'void',
        },
      ],
      typeParams: [
        {
          name: 'K',
          type: 'any',
          description: 'The type of keys in the map.',
        },
        {
          name: 'V',
          type: 'any',
          description: 'The type of values in the map.',
        },
      ],
    },
  ],
};
