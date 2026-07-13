import { OneAxisAlignmentOrientational } from '@ardium-ui/ui';
import { BOOLEAN_PROPERTY_DATA } from '@utils';
import { ApiPageData } from 'src/app/components/api-page';

export const DividerApiData: ApiPageData = {
  name: 'Divider',
  modules: [
    {
      name: 'ArdiumDividerModule',
      exports: 'ArdiumDividerComponent, ArdiumDividerDirective',
    },
  ],
  components: [
    {
      name: 'ArdiumDividerComponent',
      selector: 'ard-divider',
      exportedFrom: 'ArdiumDividerModule',
      description: 'Visual separator that can be horizontal or vertical, with optional projected content.',
      inputs: [
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'vertical',
          description: 'Renders the divider vertically when true.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'flexItem',
          description: 'Makes the divider stretch in flex layouts.',
        },
        {
          name: 'textAlign',
          type: 'OneAxisAlignmentOrientational',
          description: 'Aligns divider content between the before/after lines.',
          default: OneAxisAlignmentOrientational.Center,
        },
        {
          name: 'variant',
          type: 'ArdDividerVariant',
          description: 'Controls inset behavior of the divider line.',
          default: 'full',
        },
      ],
      contentChildren: [
        {
          selector: null,
          description: 'Projected content rendered in the divider label area.',
        },
      ],
    },
  ],
  directives: [
    {
      name: 'ArdiumDividerDirective',
      selector: '[ard-divider]',
      exportedFrom: 'ArdiumDividerModule',
      description: 'Applies divider behavior and styles to existing host elements.',
      inputs: [
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'vertical',
          description: 'Renders the divider vertically when true.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'flexItem',
          description: 'Makes the divider stretch in flex layouts.',
        },
        {
          name: 'textAlign',
          type: 'OneAxisAlignmentOrientational',
          description: 'Aligns divider content between the before/after lines.',
          default: OneAxisAlignmentOrientational.Center,
        },
        {
          name: 'variant',
          type: 'ArdDividerVariant',
          description: 'Controls inset behavior of the divider line.',
          default: 'full',
        },
      ],
    },
  ],
  injectionTokens: [
    {
      name: 'ARD_DIVIDER_DEFAULTS',
      type: 'ArdDividerDefaults',
      description: 'Used to provide default values for divider inputs.',
      allOptional: false,
    },
  ],
  interfaces: [
    {
      name: 'ArdDividerDefaults',
      description: 'Type used for providing default divider values.',
    },
  ],
  types: [
    {
      name: 'ArdDividerVariant',
      description: 'Supported divider variants.',
      definition: `'full' | 'middle'`,
    },
  ],
  functions: [
    {
      name: 'provideDividerDefaults',
      description: 'Provides default divider input values and merges them with built-in defaults.',
      returnType: 'Provider',
      params: [
        {
          name: 'config',
          type: 'Partial<ArdDividerDefaults>',
          description: 'Object containing default values to override.',
        },
      ],
    },
  ],
};
