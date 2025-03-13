import { ApiPageData } from 'src/app/components/api-page';

export const RelativePosApiData: ApiPageData = {
  name: 'Relative Pos',
  classes: [
    {
      name: 'EventRelativePos',
      description:
        'Class representing the position of an event relative to a target element. It also determines whether the event position overflows the boundaries of the target element.',
      typeParams: [
        {
          name: 'T',
          type: 'HTMLElement',
          description: 'The type of the target HTML element.',
        },
      ],
      properties: [
        {
          name: 'target',
          type: 'T',
          description: 'The target element relative to which the event position is calculated.',
        },
        {
          name: 'top',
          type: 'number',
          description: 'The distance from the top of the target element to the event position.',
        },
        {
          name: 'right',
          type: 'number',
          description: 'The distance from the event position to the right edge of the target element.',
        },
        {
          name: 'bottom',
          type: 'number',
          description: 'The distance from the event position to the bottom of the target element.',
        },
        {
          name: 'left',
          type: 'number',
          description: 'The distance from the left edge of the target element to the event position.',
        },
        {
          name: 'overflowsTop',
          type: 'boolean',
          description: 'Indicates whether the event position overflows beyond the top of the target element.',
        },
        {
          name: 'overflowsRight',
          type: 'boolean',
          description: 'Indicates whether the event position overflows beyond the right side of the target element.',
        },
        {
          name: 'overflowsBottom',
          type: 'boolean',
          description: 'Indicates whether the event position overflows beyond the bottom of the target element.',
        },
        {
          name: 'overflowsLeft',
          type: 'boolean',
          description: 'Indicates whether the event position overflows beyond the left side of the target element.',
        },
        {
          name: 'overflows',
          type: 'boolean',
          description: 'Indicates whether the event position overflows any side of the target element.',
        },
      ],
      methods: [
        {
          name: 'valueOf',
          returnType: '{ top: number; right: number; bottom: number; left: number; }',
          description: 'Returns an object representation of the event relative position values.',
        },
        {
          name: 'toJSON',
          returnType: 'string',
          description:
            'Returns a JSON string representation of the event relative position values. Basically takes the output of the <code>valueOf</code> method and stringifies it.',
        },
        {
          name: 'toString',
          returnType: 'string',
          description: 'Alias of the <code>toJSON</code> method.',
        },
      ],
    },
  ],
  functions: [
    {
      name: 'getEventRelativePos',
      description:
        'Computes the position of an event relative to a target element and returns an instance of <code>EventRelativePos</code>.',
      params: [
        {
          name: 'event',
          type: 'MouseEvent | TouchEvent | Touch',
          description: 'The event whose position is being determined.',
        },
        {
          name: 'el',
          type: 'T | ElementRef<T>',
          description: 'The target element or an ElementRef to the target element.',
        },
      ],
      returnType: 'EventRelativePos<T>',
    },
  ],
};
