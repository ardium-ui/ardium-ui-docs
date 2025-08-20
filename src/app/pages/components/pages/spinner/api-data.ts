import { ButtonAppearance, ButtonVariant, ComponentColor, SimpleOneAxisAlignment } from '@ardium-ui/ui';
import { BOOLEAN_PROPERTY_DATA } from '@utils';
import { ApiPageData } from 'src/app/components/api-page';

export const SpinnerApiData: ApiPageData = {
  name: 'Spinner',
  modules: [
    {
      name: 'ArdiumButtonModule',
      exports: 'ArdiumButtonComponent',
    },
  ],
  components: [
    {
      name: 'ArdiumButtonComponent',
      selector: 'ard-button',
      exportedFrom: 'ArdiumButtonModule',
      inputs: [
        {
          name: 'appearance',
          type: 'ButtonAppearance',
          default: ButtonAppearance.Raised,
          description: 'Theme appearance of the button.',
        },
        {
          name: 'type',
          type: 'ButtonType',
          default: 'button',
          description:
            'The HTML button <a href="https://www.w3schools.com/tags/att_button_type.asp"><code>type</code></a> attribute.',
        },
        {
          name: 'variant',
          type: 'ButtonVariant',
          default: ButtonVariant.Rounded,
          description: 'The shape of the button.',
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
          name: 'wrapperClasses',
          type: 'string',
          default: '<i>empty string</i>',
          description: 'Classes that should be added to the <code>&lt;button&gt;</code> element.',
        },
        {
          name: 'icon',
          type: 'string',
          default: '<i>empty string</i>',
          description: 'The name of the Material Icon that should be used for the button.',
        },
        {
          name: 'alignIcon',
          type: 'SimpleOneAxisAlignment',
          default: SimpleOneAxisAlignment.Left,
          description: 'Which side the icon should be placed on.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'compact',
          description:
            'Whether the button should have a vertical layout.</p><p><code>alignIcon="left"</code> now aligns to the top, and <code>"right"</code> aligns to the bottom.',
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
  enums: [
    {
      name: 'ButtonAppearance',
      description: 'General button appearance. Controls which parts of the button are be colored.',
      definition: `export const ButtonAppearance = {
  /**
   * No border and no background. Text and icon are colored.
   */
  Transparent: 'transparent',
  /**
   * No border, but with text shadow. Text, icon, and background are colored.
   */
  Raised: 'raised',
  /**
   * No border, but with text shadow. White background. Text and icon are colored.
   */
  RaisedStrong: 'raised-strong',
  /**
   * White background. Text and icon are colored.
   */
  Outlined: 'outlined',
  /**
   * White background. Text, icon, and border may be colored.
   *
   * Background becomes colored on hover/focus.
   */
  OutlinedStrong: 'outlined-strong',
  /**
   * No border. Text, icon, and background are colored.
   */
  Flat: 'flat',
} as const;
export type ButtonAppearance = (typeof ButtonAppearance)[keyof typeof ButtonAppearance];`,
    },
    {
      name: 'ButtonVariant',
      definition: `export const ButtonVariant = {
  /**
   * Basic, rectangular button.
   */
  Rounded: 'rounded',
  /**
   * Pill-shaped button.
   */
  Pill: 'pill',
  /**
   * Basic, rectangular button with sharp corners.
   */
  Sharp: 'sharp',
} as const;
export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];`,
    },
  ],
  injectionTokens: [
    {
      name: 'ARD_BUTTON_DEFAULTS',
      type: 'ArdButtonDefaults',
      description: 'Used to provide the default values for all Button inputs.',
      allOptional: false,
    },
  ],
  interfaces: [
    {
      name: 'ArdButtonDefaults',
      description: 'Type used for providing default values for the Button.',
    },
  ],
  functions: [
    {
      name: 'provideButtonDefaults',
      description: 'Function used to provide default values for the Button, merging them with library defaults.',
      returnType: 'Provider',
      params: [
        {
          name: 'config',
          type: 'Partial<ArdButtonDefaults>',
          description: 'Object containing the new default values for the Button.',
        },
      ],
    },
  ],
};
