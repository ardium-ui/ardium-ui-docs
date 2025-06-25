import { ApiPageData } from 'src/app/components/api-page';

export const SetSignalApiData: ApiPageData = {
  name: 'Set signal',
  functions: [
    {
      name: 'setSignal',
      description: 'Creates a writable, reactive Set signal with convenient, immutable Set manipulation methods.',
      params: [
        {
          name: 'initialValue',
          type: 'Iterable<T>',
          description: 'Initial values for the set.',
          default: '[]',
          required: false,
        },
      ],
      typeParams: [
        {
          name: 'T',
          type: 'any',
          description: 'The type of items stored in the set.',
        },
      ],
      returnType: 'WritableSetSignal<T>',
    },
  ],
  interfaces: [
    {
      name: 'SetSignal<T>',
      description: 'A read-only set signal with non-mutating methods.',
      methods: [
        {
          name: '()',
          description: 'Reactively returns the current value of the set.',
          returnType: 'Set<T>',
        },
        {
          name: 'isEmpty',
          description: 'Reactively returns <code>true</code> if the set is empty.',
          returnType: 'boolean',
        },
        {
          name: 'size',
          description: 'Reactively returns the number of elements in the set.',
          returnType: 'number',
        },
        {
          name: 'has',
          description: 'Reactively checks if a value exists in the set.',
          params: [
            {
              name: 'value',
              type: 'T',
              description: 'The value to check for existence.',
            },
          ],
          returnType: 'boolean',
        },
        {
          name: 'asArray',
          description: 'Reactively returns an array containing all items in the set.',
          returnType: 'T[]',
        },
      ],
      typeParams: [
        {
          name: 'T',
          type: 'any',
          description: 'The type of items stored in the set.',
        },
      ],
    },
    {
      name: 'WritableSetSignal<T>',
      description: 'A writable set signal with mutating and non-mutating methods.',
      methods: [
        {
          name: '()',
          description: 'Returns the current value of the set.',
          returnType: 'Set<T>',
        },
        {
          name: 'isEmpty',
          description: 'Reactively returns <code>true</code> if the set is empty.',
          returnType: 'boolean',
        },
        {
          name: 'size',
          description: 'Reactively returns the number of elements in the set.',
          returnType: 'number',
        },
        {
          name: 'has',
          description: 'Reactively checks if a value exists in the set.',
          params: [
            {
              name: 'value',
              type: 'T',
              description: 'The value to check for existence.',
            },
          ],
          returnType: 'boolean',
        },
        {
          name: 'asArray',
          description: 'Reactively returns an array containing all items in the set.',
          returnType: 'T[]',
        },
        {
          name: 'asReadonly',
          description: 'Returns a read-only version of the set signal.',
          returnType: 'SetSignal<T>',
        },
        {
          name: 'add',
          description: 'Adds a value to the set.',
          params: [
            {
              name: 'value',
              type: 'T',
              description: 'The value to add.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'delete',
          description: 'Deletes a value from the set. Returns <code>true</code> if the value was removed.',
          params: [
            {
              name: 'value',
              type: 'T',
              description: 'The value to delete.',
            },
          ],
          returnType: 'boolean',
        },
        {
          name: 'clear',
          description: 'Clears all values from the set.',
          returnType: 'void',
        },
        {
          name: 'set',
          description: 'Replaces the set with a new set.',
          params: [
            {
              name: 'value',
              type: 'Set<T>',
              description: 'The new set value.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'update',
          description: 'Updates the set using an update function.',
          params: [
            {
              name: 'updateFn',
              type: '(current: Set<T>) => Set<T>',
              description: 'Function that receives the current set and returns a new set.',
            },
          ],
          returnType: 'void',
        },
      ],
      typeParams: [
        {
          name: 'T',
          type: 'any',
          description: 'The type of items stored in the set.',
        },
      ],
    },
  ],
};
