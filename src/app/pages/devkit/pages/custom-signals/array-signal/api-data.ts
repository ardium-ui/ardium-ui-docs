import { ApiPageData } from 'src/app/components/api-page';

export const ArraySignalApiData: ApiPageData = {
  name: 'Array Signal',
  functions: [
    {
      name: 'arraySignal',
      description: `Creates a writable, reactive array signal with convenient, immutable array manipulation methods.`,
      params: [
        {
          name: 'initialValue',
          type: 'T[]',
          description: 'Initial value for the array.',
          default: '[]',
          required: false,
        },
      ],
      typeParams: [
        {
          name: 'T',
          description: "The type of each element in the signal's array.",
          type: 'any',
        },
      ],
      returnType: 'WritableArraySignal<T>',
    },
  ],
  interfaces: [
    {
      name: 'ArraySignal<T>',
      description: 'A read-only array signal with non-mutating methods.',
      methods: [
        {
          name: '()',
          description: "Returns the array signal's current value.",
          returnType: 'T',
        },
        {
          name: 'isEmpty',
          description: 'A computed signal that returns `true` if the array is empty.',
          returnType: 'boolean',
        },
      ],
      typeParams: [
        {
          name: 'T',
          description: "The type of each element in the signal's array.",
          type: 'any',
        },
      ],
    },
    {
      name: 'WritableArraySignal<T>',
      description: 'A writable array signal with mutating and non-mutating methods.',
      methods: [
        {
          name: '()',
          description: "Returns the array signal's current value.",
          returnType: 'T',
        },
        {
          name: 'isEmpty',
          description: 'A computed signal that returns `true` if the array is empty.',
          returnType: 'boolean',
        },
        {
          name: 'asReadonly',
          description: 'Returns a read-only version of the array signal.',
          returnType: 'ArraySignal<T>',
        },
        {
          name: 'fill',
          description:
            'Fills all the elements of the array signal from a start index to an end index with a static value.',
          params: [
            {
              name: 'value',
              type: 'T',
              description: 'The value to fill the array with.',
            },
            {
              name: 'start',
              type: 'number',
              description: 'The start index (inclusive). Defaults to 0.',
              default: '0',
              required: false,
            },
            {
              name: 'end',
              type: 'number',
              description: 'The end index (exclusive). Defaults to array length.',
              default: 'array length',
              required: false,
            },
          ],
          returnType: 'void',
        },
        {
          name: 'filter',
          description:
            'Filters the array based on a predicate function and updates the signal with the filtered result.',
          params: [
            {
              name: 'predicate',
              type: '(value: T, index: number, array: T[]) => boolean',
              description: 'Function to test each element of the array, should return `true` to keep the element.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'map',
          description:
            'Applies a mapping function to each element in the array and updates the signal with the result.',
          params: [
            {
              name: 'mapFn',
              type: '(value: T, index: number, array: T[]) => T',
              description:
                'Function that produces an element of the new array. Receives the current element, index, and the array.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'pop',
          description: 'Removes the last element from the array and returns it. Updates the signal.',
          returnType: 'T | undefined',
        },
        {
          name: 'push',
          description: 'Appends new elements to the end of the array and returns the new length. Updates the signal.',
          params: [
            {
              name: 'items',
              type: 'T[]',
              description: 'The elements to add.',
            },
          ],
          returnType: 'number',
        },
        {
          name: 'reverse',
          description: 'Reverses the order of the elements in the array and updates the signal.',
          returnType: 'void',
        },
        {
          name: 'set',
          description: 'Replaces the entire array with a new array value.',
          params: [
            {
              name: 'value',
              type: 'T[]',
              description: 'The new array value.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'setAt',
          description: 'Replaces the item at the given index with the new item.',
          params: [
            {
              name: 'index',
              type: 'number',
              description: 'The index where the item should be replaced.',
            },
            {
              name: 'newItem',
              type: 'T',
              description: 'The new item to be set at the given index.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'shift',
          description: 'Removes the first element from the array and returns it. Updates the signal.',
          returnType: 'T | undefined',
        },
        {
          name: 'sort',
          description: 'Sorts the elements of the array in place and updates the signal.',
          params: [
            {
              name: 'compareFn',
              type: '(a: T, b: T) => number',
              description: 'Specifies a function that defines the sort order.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'splice',
          description:
            'Changes the contents of the array by removing or replacing existing elements and/or adding new elements.',
          params: [
            {
              name: 'start',
              type: 'number',
              description: 'The index at which to start changing the array.',
            },
            {
              name: 'deleteCount',
              type: 'number',
              description: 'The number of elements to remove.',
            },
            {
              name: 'items',
              type: 'T[]',
              description: 'Elements to add to the array.',
            },
          ],
          returnType: 'T[]',
        },
        {
          name: 'unshift',
          description:
            'Adds one or more elements to the beginning of the array and returns the new length. Updates the signal.',
          params: [
            {
              name: 'items',
              type: 'T[]',
              description: 'The elements to add.',
            },
          ],
          returnType: 'number',
        },
        {
          name: 'update',
          description: 'Updates the array signal based on a provided update function.',
          params: [
            {
              name: 'updateFn',
              type: '(value: T[]) => T[]',
              description: 'A function that receives the current array and returns the updated array.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'updateAt',
          description: 'Updates the item at the given index by applying the update function.',
          params: [
            {
              name: 'index',
              type: 'number',
              description: 'The index where the item should be updated.',
            },
            {
              name: 'updateFn',
              type: '(current: T) => T',
              description: 'The function that will update the current item at the given index.',
            },
          ],
          returnType: 'void',
        },
      ],
      typeParams: [
        {
          name: 'T',
          description: "The type of each element in the signal's array.",
          type: 'any',
        },
      ],
    },
  ],
};
