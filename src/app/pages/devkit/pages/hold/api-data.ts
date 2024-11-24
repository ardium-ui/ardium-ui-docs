import { ApiPageData } from 'src/app/components/api-page';

export const HoldApiData: ApiPageData = {
  name: 'Hold',
  modules: [
    {
      name: 'ArdiumHoldModule',
      description: 'Module providing the hold directive.',
      exports: ['ArdiumHoldDirective'],
    },
  ],
  directives: [
    {
      name: 'ArdiumHoldDirective',
      exportedFrom: 'ArdiumHoldModule',
      selector: 'ardHold',
      description: 'Directive that detects when a user clicks and holds on an element.',
      inputs: [
        {
          name: 'ardHoldDelay',
          type: 'number-like',
          description:
            'How long, in milliseconds, will the user have to hold an element before the first event is fired.',
          required: false,
          default: '500',
        },
        {
          name: 'ardHoldRepeat',
          type: 'number-like',
          description:
            'How long, in milliseconds, before repeating events are fired if the user keeps holding the element.',
          required: false,
          default: '66.67',
        },
        {
          name: 'ardAllowSpaceKey',
          type: 'boolean-like',
          description: 'If set to true, the user will be able to use the space key to trigger hold events.',
          required: false,
          default: 'false',
        },
        {
          name: 'ardAllowEnterKey',
          type: 'boolean-like',
          description: 'If set to true, the user will be able to use the enter key to trigger hold events.',
          required: false,
          default: 'false',
        },
        {
          name: 'ardHoldDisabled',
          type: 'boolean-like',
          description: 'If set to true, the directive will become inactive and all existing hold events will stop.',
        },
      ],
    },
  ],
};
