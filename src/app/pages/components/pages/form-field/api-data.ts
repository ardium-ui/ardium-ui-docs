import { BOOLEAN_PROPERTY_DATA } from '@utils';
import { ApiPageData } from 'src/app/components/api-page';

export const FormFieldApiData: ApiPageData = {
  name: 'Form Field',
  modules: [
    {
      name: 'ArdiumFormFieldModule',
      exports: [
        'ArdiumFormFieldComponent',
        'ArdiumHorizonalFormFieldComponent',
        'ArdiumFormFieldNativeInputAdapterDirective',
        'ArdiumLabelComponent',
        'ArdiumHintComponent',
        'ArdiumErrorComponent',
        'ArdiumHintErrorComponent',
      ],
    },
  ],
  components: [
    {
      name: 'ArdiumFormFieldComponent',
      selector: 'ard-form-field',
      exportedFrom: 'ArdiumFormFieldModule',
      description: 'Wrapper for all form field components.',
      inputs: [
        {
          name: 'defaultHintAlign',
          type: 'SimpleOneAxisAlignment',
          default: '"left"',
          description: 'The default alignment of all hints and errors inside the form field.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'reserveHintLine',
          description:
            'Whether at least one text line should be reserved for the hints and errors to prevent excessive layout shifts.',
        },
      ],
      contentChildren: [
        {
          selector: 'ARD_FORM_FIELD_CONTROL',
          description:
            'Any component that provides the <code>ARD_FORM_FIELD_CONTROL</code> injection token. Required for every form field. Used for getting the field state and HTML id.',
        },
        {
          selector: 'ard-label, [ard-label]',
          description: 'The label element of the form field.',
        },
        {
          selector: 'ard-hint, [ard-hint]',
          description: 'The hints that should be displayed under the form control.',
        },
        {
          selector: 'ard-error, [ard-error]',
          description: 'The error messages that should be displayed under the form control.',
        },
        {
          selector: 'ard-hint-error, [ard-hint-error]',
          description: 'The hints that should be displayed under the form control even if the field has an error.',
        },
      ],
    },
    {
      name: 'ArdiumHorizontalFormFieldComponent',
      selector: 'ard-form-field',
      exportedFrom: 'ArdiumFormFieldModule',
      description: 'Wrapper for all form field components with a horizontal layout.',
      inputs: [
        {
          name: 'defaultHintAlign',
          type: 'SimpleOneAxisAlignment',
          default: '"left"',
          description: 'The default alignment of all hints and errors inside the form field.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'reserveHintLine',
          description:
            'Whether at least one text line should be reserved for the hints and errors to prevent excessive layout shifts.',
        },
      ],
      contentChildren: [
        {
          selector: 'ARD_FORM_FIELD_CONTROL',
          description:
            'Any component that provides the <code>ARD_FORM_FIELD_CONTROL</code> injection token. Required for every form field. Used for getting the field state and HTML id.',
        },
        {
          selector: 'ard-label, [ard-label]',
          description: 'The label element of the form field.',
        },
        {
          selector: 'ard-hint, [ard-hint]',
          description: 'The hints that should be displayed under the form control.',
        },
        {
          selector: 'ard-error, [ard-error]',
          description: 'The error messages that should be displayed under the form control.',
        },
        {
          selector: 'ard-hint-error, [ard-hint-error]',
          description: 'The hints that should be displayed under the form control even if the field has an error.',
        },
      ],
    },
    {
      name: 'ArdiumLabelComponent',
      selector: 'ard-label',
      exportedFrom: 'ArdiumFormFieldModule',
      description: 'The label for the form control. Automatically detects the id attribute of the from control.',
      inputs: [
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'required',
          description: 'Whether the label should be marked as required (add an asterisk)',
        },
        {
          name: 'requiredText',
          type: 'string',
          default: '" *"',
          description: 'The text to display after the label if <code>[required]</code> is set to <code>true</code>.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'optional',
          description: 'Whether the label should be marked as optional (add an "optional" text)',
        },
        {
          name: 'optionalText',
          type: 'string',
          default: '" *"',
          description: 'The text to display after the label if <code>[optional]</code> is set to <code>true</code>.',
        },
      ],
    },
    {
      name: 'ArdiumHintComponent',
      selector: 'ard-hint',
      exportedFrom: 'ArdiumFormFieldModule',
      description:
        'The helper text displayed under the form control meant to provide additional information about the field.',
      inputs: [
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'left',
          description:
            'Whether the hint should be aligned to the left side of the field. Cannot coexist with <code>[right]</code>.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'right',
          description:
            'Whether the hint should be aligned to the right side of the field. Cannot coexist with <code>[left]</code>.',
        },
      ],
    },
    {
      name: 'ArdiumErrorComponent',
      selector: 'ard-error',
      exportedFrom: 'ArdiumFormFieldModule',
      description:
        'The error message displayed under the form control meant to provide information about what is wrong with the field.',
      inputs: [
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'left',
          description:
            'Whether the error should be aligned to the left side of the field. Cannot coexist with <code>[right]</code>.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'right',
          description:
            'Whether the error should be aligned to the right side of the field. Cannot coexist with <code>[left]</code>.',
        },
      ],
    },
    {
      name: 'ArdiumHintErrorComponent',
      selector: 'ard-hint-error',
      exportedFrom: 'ArdiumFormFieldModule',
      description:
        'The helper text displayed under the form control meant to provide additional information about the field, but is displayed even if the field has an error message.',
      inputs: [
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'left',
          description:
            'Whether the hint should be aligned to the left side of the field. Cannot coexist with <code>[right]</code>.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'right',
          description:
            'Whether the hint should be aligned to the right side of the field. Cannot coexist with <code>[left]</code>.',
        },
      ],
    },
  ],
  directives: [
    {
      name: 'ArdiumHintDirective',
      selector: '[ard-hint]',
      exportedFrom: null,
      description:
        'The helper text displayed under the form control meant to provide additional information about the field, in the form of a directive applicable to any element.',
      inputs: [
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'left',
          description:
            'Whether the hint should be aligned to the left side of the field. Cannot coexist with <code>[right]</code>.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'right',
          description:
            'Whether the hint should be aligned to the right side of the field. Cannot coexist with <code>[left]</code>.',
        },
      ],
    },
    {
      name: 'ArdiumErrorDirective',
      selector: '[ard-error]',
      exportedFrom: null,
      description:
        'The error message displayed under the form control meant to provide information about what is wrong with the field, in the form of a directive applicable to any element.',
      inputs: [
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'left',
          description:
            'Whether the error should be aligned to the left side of the field. Cannot coexist with <code>[right]</code>.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'right',
          description:
            'Whether the error should be aligned to the right side of the field. Cannot coexist with <code>[left]</code>.',
        },
      ],
    },
    {
      name: 'ArdiumHintErrorDirective',
      selector: '[ard-hint-error]',
      exportedFrom: null,
      description:
        'The helper text displayed under the form control meant to provide additional information about the field, but is displayed even if the field has an error message, in the form of a directive applicable to any element.',
      inputs: [
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'left',
          description:
            'Whether the hint should be aligned to the left side of the field. Cannot coexist with <code>[right]</code>.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'right',
          description:
            'Whether the hint should be aligned to the right side of the field. Cannot coexist with <code>[left]</code>.',
        },
      ],
    },
  ],
  injectionTokens: [
    {
      name: 'ARD_FORM_FIELD_DEFAULTS',
      type: 'ArdFormFieldDefaults',
      description:
        'Used to provide the default values for all Form Field inputs, as well as the inputs of Label component.',
      allOptional: false,
    },
  ],
  interfaces: [
    {
      name: 'ArdFormFieldDefaults',
      description: 'Type used for providing default values for the Form Field and Label.',
    },
  ],
  functions: [
    {
      name: 'provideFormFieldefaults',
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
