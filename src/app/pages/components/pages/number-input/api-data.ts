import { ApiPageData } from 'src/app/components/api-page';

export const NumberInputApiData: ApiPageData = {
  name: 'Number Input',
  modules: [
    {
      name: 'ArdiumNumberInputModule',
      description:
        'Angular module that declares and exports the number input component together with its template directives.',
      exports: ['ArdiumNumberInputComponent'],
    },
  ],
  components: [
    {
      name: 'ArdiumNumberInputComponent',
      selector: 'ard-number-input',
      exportedFrom: 'ArdiumNumberInputModule',
      description:
        'Form-field compatible number input component with support for Angular forms, optional increment and decrement buttons, configurable decimal handling, min/max enforcement, and projected prefix, suffix, and placeholder templates.',
      inputs: [
        {
          name: 'inputId',
          type: 'Nullable<string>',
          description:
            'Optional id applied to the internal <code>input</code> element. This is useful for connecting labels or accessibility attributes.',
          required: false,
        },
        {
          name: 'placeholder',
          type: 'Nullable<string>',
          description:
            'Placeholder text displayed when the control has no visible string value and no custom placeholder template is provided.',
          default: `''`,
          required: false,
        },
        {
          name: 'appearance',
          type: 'FormElementAppearance',
          description: 'Visual appearance used by the input field.',
          default: `FormElementAppearance.Outlined`,
          required: false,
        },
        {
          name: 'variant',
          type: 'FormElementVariant',
          description: 'Shape variant used by the input field and quick-change buttons.',
          default: `FormElementVariant.Rounded`,
          required: false,
        },
        {
          name: 'alignText',
          type: 'OneAxisAlignment',
          description: 'Horizontal alignment of the text rendered inside the input.',
          default: `OneAxisAlignment.Center`,
          required: false,
        },
        {
          name: 'compact',
          type: 'BooleanLike',
          description: 'Determines whether the component uses a more compact visual layout.',
          default: `false`,
          required: false,
        },
        {
          name: 'inputAttrs',
          type: 'Record<string, any>',
          description:
            'Additional HTML attributes applied to the internal <code>input</code> element after view initialization. These attributes are merged with the component built-in attributes.',
          default: `{}`,
          required: false,
        },
        {
          name: 'min',
          type: 'NumberLike',
          description: 'Minimum numeric value allowed by the component.',
          default: `0`,
          required: false,
        },
        {
          name: 'max',
          type: 'NumberLike',
          description: 'Maximum numeric value allowed by the component.',
          default: `Infinity`,
          required: false,
        },
        {
          name: 'minMaxBehavior',
          type: 'ArdNumberInputMinMaxBehavior',
          description:
            'Controls when values outside the configured <code>min</code> and <code>max</code> range are adjusted.',
          default: `ArdNumberInputMinMaxBehavior.AdjustOnBlur`,
          required: false,
        },
        {
          name: 'maxDecimalPlaces',
          type: 'NumberLike',
          description: 'Maximum number of decimal places allowed. The value must be a non-negative integer.',
          default: `Infinity`,
          required: false,
        },
        {
          name: 'fixedDecimalPlaces',
          type: 'BooleanLike',
          description:
            'Determines whether the displayed value should keep a fixed number of decimal places instead of trimming trailing zeros.',
          default: `false`,
          required: false,
        },
        {
          name: 'decimalSeparator',
          type: 'string',
          description: 'Single-character decimal separator used when parsing and rendering decimal values.',
          default: `'.'`,
          required: false,
        },
        {
          name: 'allowFloat',
          type: 'BooleanLike',
          description:
            'Determines whether floating-point values are allowed. When <code>false</code>, <code>[stepSize]</code> must be an integer.',
          default: `false`,
          required: false,
        },
        {
          name: 'noButtons',
          type: 'BooleanLike',
          description: 'Determines whether the increment and decrement quick-change buttons are hidden.',
          default: `false`,
          required: false,
        },
        {
          name: 'keepFocusOnQuickChangeButton',
          type: 'BooleanLike',
          description:
            'Determines whether quick-change buttons should retain focus after interaction instead of moving focus back to the input.',
          default: `true`,
          required: false,
        },
        {
          name: 'stepSize',
          type: 'NumberLike',
          description:
            'Amount added or subtracted when a quick-change button is activated. The value must be greater than <code>0</code>.',
          default: `1`,
          required: false,
        },
      ],
      twoWayBindings: [
        {
          name: 'value',
          type: 'number | null',
          description:
            'Current component value. Numeric values are converted to strings before being written to the internal model. This input forms a two-way binding pair with <code>valueChange</code>.',
          required: false,
        },
      ],
      outputs: [
        {
          name: 'input',
          type: 'number | null',
          description: 'Emitted whenever user input changes the parsed numeric value.',
        },
        {
          name: 'change',
          type: 'number | null',
          description:
            'Emitted whenever the component commits a value change, including typing, blur normalization, and quick-change button interactions.',
        },
        {
          name: 'clear',
          type: 'MouseEvent',
          description: 'Emitted when the component clear action is triggered.',
        },
        {
          name: 'quickChange',
          type: '{ readonly direction: 1 | -1; readonly value: number; }',
          description:
            'Emitted after the increment or decrement quick-change buttons change the value. The payload contains the applied direction and the resulting numeric value.',
        },
      ],
      templates: [
        {
          name: 'Placeholder Template',
          selector: 'ng-template[ard-placeholder-tmp]',
          description:
            'Custom template rendered when the component should display placeholder content. When no custom template is provided, the component renders a default placeholder element showing the current <code>placeholder()</code> value.',
          defaultHtmlContent: `<div class="ard-placeholder">{{ placeholder() }}</div>`,
        },
        {
          name: 'Prefix Template',
          selector: 'ng-template[ard-prefix-tmp]',
          description: 'Custom template projected into the prefix container before the input element.',
          defaultHtmlContent: ``,
        },
        {
          name: 'Suffix Template',
          selector: 'ng-template[ard-suffix-tmp]',
          description: 'Custom template projected into the suffix container after the input element.',
          defaultHtmlContent: ``,
        },
      ],
    },
  ],
  directives: [
    {
      name: 'ArdNumberInputPlaceholderTemplateDirective',
      selector: 'ard-number-input > ng-template[ard-placeholder-tmp]',
      exportedFrom: 'ArdiumNumberInputModule',
      description:
        'Marks a projected <code>ng-template</code> as the custom placeholder template for <code>ArdiumNumberInputComponent</code>.',
    },
    {
      name: 'ArdNumberInputPrefixTemplateDirective',
      selector: 'ard-number-input > ng-template[ard-prefix-tmp]',
      exportedFrom: 'ArdiumNumberInputModule',
      description:
        'Marks a projected <code>ng-template</code> as the custom prefix template for <code>ArdiumNumberInputComponent</code>.',
    },
    {
      name: 'ArdNumberInputSuffixTemplateDirective',
      selector: 'ard-number-input > ng-template[ard-suffix-tmp]',
      exportedFrom: 'ArdiumNumberInputModule',
      description:
        'Marks a projected <code>ng-template</code> as the custom suffix template for <code>ArdiumNumberInputComponent</code>.',
    },
  ],
  injectionTokens: [
    {
      name: 'ARD_NUMBER_INPUT_DEFAULTS',
      type: 'InjectionToken<ArdNumberInputDefaults>',
      description:
        'Injection token providing the default configuration used by <code>ArdiumNumberInputComponent</code> instances.',
      allOptional: false,
    },
  ],
  interfaces: [
    {
      name: 'ArdNumberInputDefaults',
      description: 'Type used for providing default values for the Number Input.',
    },
  ],
  enums: [
    {
      name: 'ArdNumberInputMinMaxBehavior',
      description:
        'Describes how the number input should react when its value exceeds the configured minimum or maximum bounds.',
      definition: `export const ArdNumberInputMinMaxBehavior = {
  AdjustOnInput: 'adjust-on-input',
  AdjustOnBlur: 'adjust-on-blur',
  Noop: 'noop',
} as const;
export type ArdNumberInputMinMaxBehavior = typeof ArdNumberInputMinMaxBehavior[keyof typeof ArdNumberInputMinMaxBehavior];`,
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
