import { ApiPageData } from 'src/app/components/api-page';

export const ClickOutisdeApiData: ApiPageData = {
  name: 'Click outisde',
  modules: [
    {
      name: 'ArdiumClickOutisdeModule',
      exports: 'ArdiumClickOutsideDirective',
    },
  ],
  directives: [
    {
      name: 'ArdiumClickOutsideDirective',
      description: 'Detects when the user clicks or touches outside a given element.',
      exportedFrom: 'ArdiumClickOutsideModule',
      selector: '[ardClickOutside]',
      outputs: [
        {
          name: 'ardClickOutside',
          description: 'Fired when the user clicks or touches outside of a given element.',
          type: 'MouseEvent',
        }
      ]
    },
  ],
};
