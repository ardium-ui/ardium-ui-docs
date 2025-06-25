import { ApiPageData } from 'src/app/components/api-page';

export const TupleSignalApiData: ApiPageData = {
  name: 'Tuple signal',
  functions: [
    {
      name: 'tupleSignal',
      description:
        'Creates a writable, reactive tuple signal of <strong>fixed length</strong>, with tuple-specific and array-like helpers.',
      params: [
        {
          name: 'initialValue',
          type: 'T',
          description: 'The initial tuple value.',
        },
      ],
      typeParams: [
        {
          name: 'T',
          type: 'readonly unknown[]',
          description: 'The tuple type (e.g. <code>[number, string, boolean]</code>).',
        },
      ],
      returnType: 'WritableTupleSignal<T>',
    },
  ],
  interfaces: [
    {
      name: 'TupleSignal<T>',
      description: 'A read-only tuple signal.',
      methods: [
        {
          name: '()',
          description: 'Reactively returns the current tuple value.',
          returnType: 'T',
        },
        {
          name: 'entriesArray',
          description: 'Reactively returns an array of tuple entries as <code>[index, value]</code> pairs.',
          returnType: '{ [K in keyof T]: [K, T[K]] }[number][]',
        },
        {
          name: 'getAt',
          description: 'Reactively returns the value at the given index in the tuple.',
          params: [
            {
              name: 'index',
              type: 'I',
              description: 'The index of the element to retrieve.',
            },
          ],
          returnType: 'T[I]',
        },
      ],
      typeParams: [
        {
          name: 'T',
          type: 'readonly unknown[]',
          description: 'The tuple type.',
        },
      ],
    },
    {
      name: 'WritableTupleSignal<T>',
      description: 'A writable tuple signal.',
      methods: [
        {
          name: '()',
          description: 'Reactively returns the current tuple value.',
          returnType: 'T',
        },
        {
          name: 'entriesArray',
          description: 'Reactively returns an array of tuple entries as <code>[index, value]</code> pairs.',
          returnType: '{ [K in keyof T]: [K, T[K]] }[number][]',
        },
        {
          name: 'getAt',
          description: 'Reactively returns the value at the given index in the tuple.',
          params: [
            {
              name: 'index',
              type: 'I',
              description: 'The index of the element to retrieve.',
            },
          ],
          returnType: 'T[I]',
        },
        {
          name: 'asReadonly',
          description: 'Returns a read-only version of the tuple signal.',
          returnType: 'TupleSignal<T>',
        },
        {
          name: 'setAt',
          description: 'Sets the value at a given index in the tuple.',
          params: [
            {
              name: 'index',
              type: 'I',
              description: 'The index to set.',
            },
            {
              name: 'value',
              type: 'T[I]',
              description: 'The new value to assign at the given index.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'update',
          description: 'Updates the entire tuple using the provided update function.',
          params: [
            {
              name: 'updateFn',
              type: '(current: T) => T',
              description: 'Function that receives the current tuple and returns a new tuple.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'updateAt',
          description: 'Updates the value at a given index using the provided update function.',
          params: [
            {
              name: 'index',
              type: 'I',
              description: 'The index to update.',
            },
            {
              name: 'updateFn',
              type: '(value: T[I]) => T[I]',
              description: 'Function that receives the current value and returns an updated value.',
            },
          ],
          returnType: 'void',
        },
      ],
      typeParams: [
        {
          name: 'T',
          type: 'readonly unknown[]',
          description: 'The tuple type.',
        },
      ],
    },
  ],
};
