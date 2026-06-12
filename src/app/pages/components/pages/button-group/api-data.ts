import { BOOLEAN_PROPERTY_DATA } from '@utils';
import { ApiPageData } from 'src/app/components/api-page';

export const ButtonGroupApiData: ApiPageData = {
  name: 'ButtonGroup',
  modules: [
    {
      name: 'ArdiumButtonGroupModule',
      exports: 'ArdiumButtonGroupComponent',
    },
  ],
  components: [
    {
      name: 'ArdiumButtonGroupComponent',
      selector: 'ard-button-group',
      exportedFrom: 'ArdiumButtonGroupModule',
      inputs: [
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'compact',
          description:
            'Whether the buttons inside the group should be a smaller, <i>compact</i> version. Nested button groups will inherit this value unless overridden.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'vertical',
          description:
            'Whether the button group should have a vertical layout. Nested button groups will inherit this value unless overridden.',
        },
      ],
      contentChildren: [
        {
          selector: null,
          description:
            'The content to be displayed inside the button group. Note that the button group content wrapper uses flexbox to display its items.',
        },
      ],
    },
  ],
  injectionTokens: [
    {
      name: 'ARD_BUTTON_GROUP_DEFAULTS',
      type: 'ArdButtonGroupDefaults',
      description: 'Used to provide the default values for all Button Group inputs.',
      allOptional: false,
    },
  ],
  interfaces: [
    {
      name: 'ArdButtonGroupDefaults',
      description: 'Type used for providing default values for the Button Group.',
    },
  ],
  functions: [
    {
      name: 'provideButtonGroupDefaults',
      description: 'Function used to provide default values for the Button Group, merging them with library defaults.',
      returnType: 'Provider',
      params: [
        {
          name: 'config',
          type: 'Partial<ArdButtonGroupDefaults>',
          description: 'Object containing the new default values for the Button Group.',
        },
      ],
    },
  ],
};
