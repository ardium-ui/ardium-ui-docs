import { ApiPageData } from 'src/app/components/api-page';

export const StackSignalApiData: ApiPageData = {
  name: 'Stack signal',
  functions: [
    {
      name: 'stackSignal',
      description: 'Creates a writable stack signal, which is a reactive stack data structure.',
      params: [
        {
          name: 'initialValue',
          type: 'T[]',
          description: 'Initial items in the stack.',
          default: '[]',
          required: false,
        },
      ],
      typeParams: [
        {
          name: 'T',
          type: 'any',
          description: 'The type of elements held in the stack.',
        },
      ],
      returnType: 'WritableStackSignal<T>',
    },
  ],
  interfaces: [
    {
      name: 'StackSignal<T>',
      description: 'A read-only stack signal, providing non-mutating helpers and computed properties.',
      methods: [
        {
          name: '()',
          description: 'Reactively returns the current value of the stack as an array.',
          returnType: 'T[]',
        },
        {
          name: 'isEmpty',
          description: 'Reactively returns <code>true</code> if the stack is empty.',
          returnType: 'boolean',
        },
        {
          name: 'size',
          description: 'Reactively returns the number of items in the stack.',
          returnType: 'number',
        },
        {
          name: 'top',
          description: 'Reactively returns the top item of the stack, or <code>undefined</code> if the stack is empty.',
          returnType: 'T | undefined',
        },
        {
          name: 'asArray',
          description: 'Reactively returns a shallow copy of the stack as an array.',
          returnType: 'T[]',
        },
        {
          name: 'peek',
          description: 'Reactively returns the top item in the stack, or <code>undefined</code> if the stack is empty.',
          returnType: 'T | undefined',
        },
      ],
      typeParams: [
        {
          name: 'T',
          type: 'any',
          description: 'The type of elements held in the stack.',
        },
      ],
    },
    {
      name: 'WritableStackSignal<T>',
      description: 'A writable stack signal, providing mutating and non-mutating helpers.',
      methods: [
        {
          name: '()',
          description: 'Reactively returns the current value of the stack as an array.',
          returnType: 'T[]',
        },
        {
          name: 'isEmpty',
          description: 'Reactively returns <code>true</code> if the stack is empty.',
          returnType: 'boolean',
        },
        {
          name: 'size',
          description: 'Reactively returns the number of items in the stack.',
          returnType: 'number',
        },
        {
          name: 'top',
          description: 'Reactively returns the top item of the stack, or <code>undefined</code> if the stack is empty.',
          returnType: 'T | undefined',
        },
        {
          name: 'asArray',
          description: 'Reactively returns a shallow copy of the stack as an array.',
          returnType: 'T[]',
        },
        {
          name: 'peek',
          description: 'Reactively returns the top item in the stack, or <code>undefined</code> if the stack is empty.',
          returnType: 'T | undefined',
        },
        {
          name: 'asReadonly',
          description: 'Returns a read-only version of the stack signal.',
          returnType: 'StackSignal<T>',
        },
        {
          name: 'push',
          description: 'Pushes one or more items onto the top of the stack.',
          params: [
            {
              name: 'items',
              type: 'T[]',
              description: 'The elements to push onto the stack.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'pop',
          description:
            'Removes and returns the top item of the stack. Returns <code>undefined</code> if the stack is empty.',
          returnType: 'T | undefined',
        },
        {
          name: 'clear',
          description: 'Clears all items from the stack.',
          returnType: 'void',
        },
        {
          name: 'set',
          description: 'Replaces the stack with a new array of items.',
          params: [
            {
              name: 'value',
              type: 'T[]',
              description: 'The new array to set as the stack.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'update',
          description: 'Updates the stack using the provided update function.',
          params: [
            {
              name: 'updateFn',
              type: '(current: T[]) => T[]',
              description: 'Function that receives the current stack and returns a new stack.',
            },
          ],
          returnType: 'void',
        },
      ],
      typeParams: [
        {
          name: 'T',
          type: 'any',
          description: 'The type of elements held in the stack.',
        },
      ],
    },
  ],
};
