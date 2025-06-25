import { ApiPageData } from 'src/app/components/api-page';

export const CounterSignalApiData: ApiPageData = {
  name: 'Counter signal',
  functions: [
    {
      name: 'counterSignal',
      description: 'Creates a writable, reactive counter signal with convenient helpers and computed queries.',
      params: [
        {
          name: 'initial',
          type: 'number',
          description: 'The initial value of the counter.',
          default: '0',
          required: false,
        },
      ],
      returnType: 'WritableCounterSignal',
    },
  ],
  interfaces: [
    {
      name: 'CounterSignal',
      description: 'A read-only counter signal with computed helpers.',
      methods: [
        {
          name: '()',
          description: 'Returns the current value of the counter signal.',
          returnType: 'number',
        },
        {
          name: 'isReset',
          description: 'A computed signal that returns `true` if the counter has not changed since last reset.',
          returnType: 'boolean',
        },
        {
          name: 'value',
          description:
            'Returns the current counter value (alias for directly calling the signal, eg. <code>mySignal()</code>).',
          returnType: 'number',
        },
      ],
    },
    {
      name: 'WritableCounterSignal',
      description: 'A writable counter signal with mutation helpers and computed queries.',
      methods: [
        {
          name: '()',
          description: 'Returns the current value of the counter signal.',
          returnType: 'number',
        },
        {
          name: 'isReset',
          description: 'A computed signal that returns `true` if the counter has not changed since last reset.',
          returnType: 'boolean',
        },
        {
          name: 'value',
          description:
            'Returns the current counter value (alias for directly calling the signal, eg. <code>mySignal()</code>).',
          returnType: 'number',
        },
        {
          name: 'asReadonly',
          description: 'Returns a read-only version of the counter signal.',
          returnType: 'CounterSignal',
        },
        {
          name: 'increment',
          description: 'Increments the counter by a specified value.',
          params: [
            {
              name: 'amount',
              type: 'number',
              description: 'The value to increment by. Default is 1.',
              default: '1',
              required: false,
            },
          ],
          returnType: 'void',
        },
        {
          name: 'decrement',
          description: 'Decrements the counter by a specified value.',
          params: [
            {
              name: 'amount',
              type: 'number',
              description: 'The value to decrement by. Default is 1.',
              default: '1',
              required: false,
            },
          ],
          returnType: 'void',
        },
        {
          name: 'set',
          description: 'Sets the counter to a specific value.',
          params: [
            {
              name: 'value',
              type: 'number',
              description: 'The value to set the counter to.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'update',
          description: 'Updates the counter using an updater function.',
          params: [
            {
              name: 'updater',
              type: '(current: number) => number',
              description: 'A function that receives the current value and returns the new value.',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'reset',
          description:
            'Resets the counter to its base (initial) value. The base value can be changed using <code>setBaseValue</code>.',
          returnType: 'void',
        },
        {
          name: 'setBaseValue',
          description: 'Sets the base value to be used when resetting the counter.',
          params: [
            {
              name: 'value',
              type: 'number',
              description: 'The new base value.',
            },
          ],
          returnType: 'void',
        },
      ],
    },
  ],
};
