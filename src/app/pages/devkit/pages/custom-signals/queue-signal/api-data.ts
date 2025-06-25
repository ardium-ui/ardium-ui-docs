import { ApiPageData } from 'src/app/components/api-page';

export const QueueSignalApiData: ApiPageData = {
  name: 'Queue signal',
  functions: [
    {
      name: 'queueSignal',
      description: 'Creates a writable queue signal, which is a reactive queue data structure.',
      params: [
        {
          name: 'initialValue',
          type: 'T[]',
          description: 'Initial items in the queue.',
          default: '[]',
          required: false,
        },
      ],
      typeParams: [
        {
          name: 'T',
          type: 'any',
          description: 'The type of elements held in the queue.',
        },
      ],
      returnType: 'WritableQueueSignal<T>',
    },
  ],
  interfaces: [
    {
      name: 'QueueSignal<T>',
      description: 'A read-only queue signal, providing non-mutating helpers and computed properties.',
      methods: [
        {
          name: '()',
          description: 'Reactively returns the current value of the queue as an array.',
          returnType: 'T[]',
        },
        {
          name: 'isEmpty',
          description: 'Reactively returns <code>true</code> if the queue is empty.',
          returnType: 'boolean',
        },
        {
          name: 'size',
          description: 'Reactively returns the number of items in the queue.',
          returnType: 'number',
        },
        {
          name: 'front',
          description: 'Reactively returns the front item of the queue or <code>undefined</code>.',
          returnType: 'T | undefined',
        },
        {
          name: 'asArray',
          description: 'Reactively returns a shallow copy of the queue as an array.',
          returnType: 'T[]',
        },
        {
          name: 'peek',
          description:
            'Reactively returns the front item in the queue, or <code>undefined</code> if the queue is empty.',
          returnType: 'T | undefined',
        },
      ],
      typeParams: [
        {
          name: 'T',
          type: 'any',
          description: 'The type of elements held in the queue.',
        },
      ],
    },
    {
      name: 'WritableQueueSignal<T>',
      description: 'A writable queue signal, providing mutating and non-mutating helpers.',
      methods: [
        {
          name: '()',
          description: 'Reactively returns the current value of the queue as an array.',
          returnType: 'T[]',
        },
        {
          name: 'isEmpty',
          description: 'Reactively returns <code>true</code> if the queue is empty.',
          returnType: 'boolean',
        },
        {
          name: 'size',
          description: 'Reactively returns the number of items in the queue.',
          returnType: 'number',
        },
        {
          name: 'front',
          description: 'Reactively returns the front item of the queue or <code>undefined</code>.',
          returnType: 'T | undefined',
        },
        {
          name: 'asArray',
          description: 'Reactively returns a shallow copy of the queue as an array.',
          returnType: 'T[]',
        },
        {
          name: 'peek',
          description: 'Reactively returns the front item in the queue, or <code>undefined</code> if the queue is empty.',
          returnType: 'T | undefined',
        },
        {
          name: 'asReadonly',
          description: 'Returns a read-only version of the queue signal.',
          returnType: 'QueueSignal<T>',
        },
        {
          name: 'enqueue',
          description: 'Adds one or more items to the end of the queue.',
          params: [
            {
              name: 'items',
              type: 'T[]',
              description: 'The elements to enqueue.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'dequeue',
          description:
            'Removes and returns the front item of the queue. Returns <code>undefined</code> if the queue is empty.',
          returnType: 'T | undefined',
        },
        {
          name: 'clear',
          description: 'Clears all items from the queue.',
          returnType: 'void',
        },
        {
          name: 'set',
          description: 'Replaces the queue with a new array of items.',
          params: [
            {
              name: 'value',
              type: 'T[]',
              description: 'The new array to set as the queue.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'update',
          description: 'Updates the queue using the provided update function.',
          params: [
            {
              name: 'updateFn',
              type: '(current: T[]) => T[]',
              description: 'Function that receives the current queue and returns a new queue.',
            },
          ],
          returnType: 'void',
        },
      ],
      typeParams: [
        {
          name: 'T',
          type: 'any',
          description: 'The type of elements held in the queue.',
        },
      ],
    },
  ],
};
