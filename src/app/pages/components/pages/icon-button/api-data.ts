import { ComponentColor } from '@ardium-ui/ui';
import { BOOLEAN_PROPERTY_DATA } from '@utils';
import { ApiPageData } from 'src/app/components/api-page';

export const IconButtonApiData: ApiPageData = {
  name: 'Icon Button',
  modules: [
    {
      name: 'ArdiumIconButtonModule',
      exports: 'ArdiumIconButtonComponent',
    },
  ],
  components: [
    {
      name: 'ArdiumIconButtonComponent',
      selector: 'ard-icon-button',
      exportedFrom: 'ArdiumIconButtonModule',
      inputs: [
        {
          name: 'type',
          type: 'ButtonType',
          default: 'button',
          description:
            'The HTML button <a href="https://www.w3schools.com/tags/att_button_type.asp"><code>type</code></a> attribute.',
        },
        {
          name: 'color',
          type: 'ComponentColor',
          default: ComponentColor.Primary,
          description: 'The color of the button.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'lightColoring',
          description:
            'Whether the button should use a light version of its color (to be displayed on a dark background). Works only on buttons that have <code>appearance</code> set to <code>"transparent"</code>.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'compact',
          description: 'Whether the button should be a smaller, <i>compact</i> version.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'pointerEventsWhenDisabled',
          description:
            'Whether the button should allow pointer events when disabled (to show a tooltip or custom cursor). Note that the button will now be clickable even when disabled.',
        },
        {
          name: 'wrapperClasses',
          type: 'string',
          default: '<i>empty string</i>',
          description: 'Classes that should be added to the <code>&lt;button&gt;</code> element.',
        },
        {
          name: 'ariaLabel',
          type: 'string',
          default: '<i>empty string</i>',
          description:
            'The ARIA label for the button, used for accessibility purposes. Strongly advised to be set when the button is used without any related text.',
        },
      ],
      contentChildren: [
        {
          selector: null,
          description:
            'The content to be displayed inside the button. Note that the button content wrapper uses flexbox to display its items.',
        },
      ],
    },
  ],
  injectionTokens: [
    {
      name: 'ARD_ICON_BUTTON_DEFAULTS',
      type: 'ArdIconButtonDefaults',
      description: 'Used to provide the default values for all Icon Button inputs.',
      allOptional: false,
    },
  ],
  interfaces: [
    {
      name: 'ArdIconButtonDefaults',
      description: 'Type used for providing default values for the Icon Button.',
    },
  ],
  functions: [
    {
      name: 'provideIconButtonDefaults',
      description: 'Function used to provide default values for the Icon Button, merging them with library defaults.',
      returnType: 'Provider',
      params: [
        {
          name: 'config',
          type: 'Partial<ArdIconButtonDefaults>',
          description: 'Object containing the new default values for the Icon Button.',
        },
      ],
    },
  ],
};
