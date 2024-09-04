import { FormElementAppearance } from '@ardium-ui/ui';
import { ApiPageData } from 'src/app/components/api-page';
import { BOOLEAN_PROPERTY_DATA, FORM_ELEMENT_APPEARANCE_PROPERTY_DATA } from 'src/app/utils/api-data';

export const KbdApiData: ApiPageData = {
  name: 'KBD',
  modules: [
    {
      name: 'ArdiumKbdModule',
      exports: ['ArdiumKbdComponent', 'ArdiumKbdDirective', 'ArdiumKbdPipe'],
    },
    {
      name: 'ArdiumKbdShortcutModule',
      exports: 'ArdiumKbdShortcutComponent',
    },
  ],
  components: [
    {
      name: 'ArdiumKbdComponent',
      selector: 'ard-kbd',
      exportedFrom: 'ArdiumKbdModule',
      inputs: [
        {
          name: 'key',
          type: 'string',
          default: `empty string`,
          description: 'Key code of the key to be displayed. Has priority over the key code defined as ng-content.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'full',
          description: 'Whether the key name should be displayed in full version.',
        },
        FORM_ELEMENT_APPEARANCE_PROPERTY_DATA('Theme appearance of the KBD.', FormElementAppearance.Filled),
      ],
      contentChildren: [
        {
          selector: null,
          description:
            'Key code of the key to be displayed. If <code>[key]</code> attribute is defined, ng-content will be ignored.\n\nNote: this is not suitable for dynamic values. Use <code>[key]</code> instead.',
        },
      ],
    },
    {
      name: 'ArdiumKbdShortcutComponent',
      selector: 'ard-kbd-shortcut',
      exportedFrom: 'ArdiumKbdShortcutModule',
      inputs: [
        {
          name: 'keys',
          type: 'array-like',
          default: `empty array`,
          description:
            'An array of key codes of the keys to be displayed. Accepts either an array of key codes as strings, or a string of key codes separated by any of: "<code>,</code>", "<code> </code>", or "<code>+</code>". Has priority over the key codes defined as ng-content.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'full',
          description: 'Whether the key name should be displayed in full version.',
        },
        FORM_ELEMENT_APPEARANCE_PROPERTY_DATA('Theme appearance of the KBD.', FormElementAppearance.Filled),
      ],
      contentChildren: [
        {
          selector: null,
          description:
            'A string of key codes of the keys to be displayed. Key codes must be separated by any of: "<code>,</code>", "<code title="space character"> </code>", or "<code>+</code>". If <code>[keys]</code> attribute is defined, ng-content will be ignored.\n\nNote: this is not suitable for dynamic values. Use <code>[keys]</code> instead.',
        },
      ],
    },
  ],
  directives: [
    {
      name: 'ArdiumKbdDirective',
      selector: '[ardKbd]',
      description: 'Applies the KBD styling to any HTML element.',
      exportedFrom: 'ArdiumKbdModule',
      inputs: [FORM_ELEMENT_APPEARANCE_PROPERTY_DATA('Theme appearance of the KBD.', FormElementAppearance.Filled)],
    },
  ],
  pipes: [
    {
      name: 'ArdiumKbdPipe',
      exportedFrom: 'ArdiumKbdModule',
      selector: 'kbd',
      description: 'Transforms a key code into a human-readable string.',
      params: [
        {
          name: 'full',
          type: 'boolean',
          description: 'Whether the key name should be displayed in full version.',
          default: 'false',
        },
      ],
    },
  ],
};
