import { ArdGridAlign, ArdGridDirection, ArdGridJustify, ArdGridSize, ArdGridWrap } from '@ardium-ui/ui';
import { BOOLEAN_PROPERTY_DATA } from '@utils';
import { ApiPageData } from 'src/app/components/api-page';

export const GridApiData: ApiPageData = {
  name: 'Grid & Stack',
  modules: [
    {
      name: 'ArdiumGridModule',
      exports: 'ArdiumGridComponent',
    },
    {
      name: 'ArdiumStackModule',
      exports: 'ArdiumStackComponent',
    },
  ],
  components: [
    {
      name: 'ArdiumGridComponent',
      selector: 'ard-grid',
      exportedFrom: 'ArdiumGridModule',
      description: 'Responsive layout grid item that can also become a flex container when the container input is set.',
      inputs: [
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'container',
          description: 'Whether this grid item should also act as a grid container.',
        },
        {
          name: 'columns',
          type: 'number | string | ArdBreakpointsConfig<number>',
          description: 'Total number of columns available in the container.',
          default: '12',
        },
        {
          name: 'size',
          type: 'number | ArdGridSize | string | ArdBreakpointsConfig<number | ArdGridSize>',
          description: 'Column span of the item, or a special grow/auto sizing mode.',
          default: ArdGridSize.Grow,
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'reverse',
          description: 'Whether the container should reverse the row direction.',
        },
        {
          name: 'justifyContent',
          type: 'ArdGridJustify | string | ArdBreakpointsConfig<ArdGridJustify>',
          description: 'Main-axis alignment for items inside a grid container.',
          default: ArdGridJustify.Start,
        },
        {
          name: 'alignItems',
          type: 'ArdGridAlign | string | ArdBreakpointsConfig<ArdGridAlign>',
          description: 'Cross-axis alignment for items inside a grid container.',
          default: ArdGridAlign.Start,
        },
        {
          name: 'spacing',
          type: 'number | string | ArdBreakpointsConfig<number | string>',
          description: 'Shared gap used for both rows and columns unless a more specific spacing input overrides it.',
          default: '3',
        },
        {
          name: 'columnSpacing',
          type: 'null | number | string | ArdBreakpointsConfig<number | string>',
          description: 'Horizontal gap between grid items.',
          default: 'null',
        },
        {
          name: 'rowSpacing',
          type: 'null | number | string | ArdBreakpointsConfig<number | string>',
          description: 'Vertical gap between grid items.',
          default: 'null',
        },
        {
          name: 'wrap',
          type: 'ArdGridWrap | string | ArdBreakpointsConfig<ArdGridWrap>',
          description: 'Wrapping behavior for items inside a grid container.',
          default: ArdGridWrap.Wrap,
        },
      ],
      contentChildren: [
        {
          selector: 'ArdiumGridComponent',
          description: 'Direct child grid items. Nested grid containers inherit layout settings when they are direct children.',
        },
      ],
    },
    {
      name: 'ArdiumStackComponent',
      selector: 'ard-stack',
      exportedFrom: 'ArdiumStackModule',
      description: 'One-dimensional flex layout primitive for vertically or horizontally stacking content.',
      inputs: [
        {
          name: 'direction',
          type: 'ArdGridDirection | string | ArdBreakpointsConfig<ArdGridDirection>',
          description: 'Direction in which stack items should flow.',
          default: ArdGridDirection.Column,
        },
        {
          name: 'justifyContent',
          type: 'ArdGridJustify | string | ArdBreakpointsConfig<ArdGridJustify>',
          description: 'Main-axis alignment for stacked content.',
          default: ArdGridJustify.Start,
        },
        {
          name: 'alignItems',
          type: 'ArdGridAlign | string | ArdBreakpointsConfig<ArdGridAlign>',
          description: 'Cross-axis alignment for stacked content.',
          default: ArdGridAlign.Start,
        },
        {
          name: 'spacing',
          type: 'number | string | ArdBreakpointsConfig<number | string>',
          description: 'Shared gap used for both axes unless overridden.',
          default: '3',
        },
        {
          name: 'columnSpacing',
          type: 'null | number | string | ArdBreakpointsConfig<number | string>',
          description: 'Horizontal gap between stack children.',
          default: 'null',
        },
        {
          name: 'rowSpacing',
          type: 'null | number | string | ArdBreakpointsConfig<number | string>',
          description: 'Vertical gap between stack children.',
          default: 'null',
        },
        {
          name: 'wrap',
          type: 'ArdGridWrap | string | ArdBreakpointsConfig<ArdGridWrap>',
          description: 'Wrapping behavior when the stack direction allows multiple lines.',
          default: ArdGridWrap.Wrap,
        },
      ],
      contentChildren: [
        {
          selector: null,
          description: 'The elements to be laid out in one dimension inside the stack.',
        },
      ],
    },
  ],
  injectionTokens: [
    {
      name: 'ARD_GRID_DEFAULTS',
      type: 'ArdGridDefaults',
      description: 'Used to provide the default values for all Grid inputs.',
      allOptional: false,
    },
    {
      name: 'ARD_STACK_DEFAULTS',
      type: 'ArdStackDefaults',
      description: 'Used to provide the default values for all Stack inputs.',
      allOptional: false,
    },
  ],
  interfaces: [
    {
      name: 'ArdGridDefaults',
      description: 'Type used for providing default values for Grid.',
    },
    {
      name: 'ArdStackDefaults',
      description: 'Type used for providing default values for Stack.',
    },
  ],
  types: [
    {
      name: 'ArdGridSize',
      description: 'Special Grid sizing keywords.',
      definition: `'grow' | 'auto'`,
    },
    {
      name: 'ArdGridJustify',
      description: 'Allowed main-axis alignment values shared by Grid and Stack.',
      definition: `'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'`,
    },
    {
      name: 'ArdGridAlign',
      description: 'Allowed cross-axis alignment values shared by Grid and Stack.',
      definition: `'flex-start' | 'flex-end' | 'center'`,
    },
    {
      name: 'ArdGridWrap',
      description: 'Allowed wrapping values shared by Grid and Stack.',
      definition: `'wrap' | 'nowrap' | 'wrap-reverse'`,
    },
    {
      name: 'ArdGridDirection',
      description: 'Allowed flow directions used by Stack.',
      definition: `'row' | 'row-reverse' | 'column' | 'column-reverse'`,
    },
  ],
  functions: [
    {
      name: 'provideGridDefaults',
      description: 'Function used to provide default values for Grid, merging them with library defaults.',
      returnType: 'Provider',
      params: [
        {
          name: 'config',
          type: 'Partial<ArdGridDefaults>',
          description: 'Object containing the new default values for Grid.',
        },
      ],
    },
    {
      name: 'provideStackDefaults',
      description: 'Function used to provide default values for Stack, merging them with library defaults.',
      returnType: 'Provider',
      params: [
        {
          name: 'config',
          type: 'Partial<ArdStackDefaults>',
          description: 'Object containing the new default values for Stack.',
        },
      ],
    },
  ],
};