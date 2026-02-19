import { ApiPageData } from 'src/app/components/api-page';

export const NumberInputApiData: ApiPageData = {
  name: 'Number Input',
  modules: [
    {
      name: 'ArdiumNumberInputModule',
      exports: ['ArdiumNumberInputComponent'],
    },
  ],
  components: [
    {
      name: 'ArdiumNumberInputComponent',
      selector: 'ard-number-input',
      exportedFrom: 'ArdiumNumberInputModule',
      description: 'TODO', // TODO
      inputs: [],
    },
  ],
  injectionTokens: [
    {
      name: 'ARD_NUMBER_INPUT_DEFAULTS',
      type: 'ArdNumberInputDefaults',
      description: 'Used to provide the default values for all Number Input inputs.',
      allOptional: false,
    },
  ],
  interfaces: [
    {
      name: 'ArdNumberInputDefaults',
      description: 'Type used for providing default values for the Number Input.',
    },
  ],
  functions: [
    {
      name: 'provideNumberInputDefaults',
      description: 'Function used to provide default values for the Number Input, merging them with library defaults.',
      returnType: 'Provider',
      params: [
        {
          name: 'config',
          type: 'Partial<ArdNumberInputDefaults>',
          description: 'Object containing the new default values for the Number Input.',
        },
      ],
    },
  ],
};
