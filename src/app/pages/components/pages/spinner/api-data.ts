import { ComponentColor } from '@ardium-ui/ui';
import { ApiPageData } from 'src/app/components/api-page';

export const SpinnerApiData: ApiPageData = {
  name: 'Spinner',
  modules: [
    {
      name: 'ArdiumSpinnerModule',
      exports: 'ArdiumSpinnerComponent',
    },
  ],
  components: [
    {
      name: 'ArdiumSpinnerComponent',
      selector: 'ard-spinner',
      exportedFrom: 'ArdiumSpinnerModule',
      inputs: [
        {
          name: 'color',
          type: 'SimpleComponentColor',
          default: ComponentColor.Primary,
          description: 'The color of the spinner.',
        },
      ],
    },
  ],
  injectionTokens: [
    {
      name: 'ARD_SPINNER_DEFAULTS',
      type: 'ArdSpinnerDefaults',
      description: 'Used to provide the default values for all Spinner inputs.',
      allOptional: true,
    },
  ],
  interfaces: [
    {
      name: 'ArdSpinnerDefaults',
      description: 'Type used for providing default values for the Spinner.',
    },
  ],
  functions: [
    {
      name: 'provideSpinnerDefaults',
      description: 'Function used to provide default values for the Spinner, merging them with library defaults.',
      returnType: 'Provider',
      params: [
        {
          name: 'config',
          type: 'Partial<ArdSpinnerDefaults>',
          description: 'Object containing the new default values for the Spinner.',
        },
      ],
    },
  ],
};
