import { StylingPageData } from 'src/app/components/styling-page';

export const NumberInputStylingData: StylingPageData = {
  name: 'Number Input',
  variables: [
    {
      name: '--ard-number-input-height',
      description: 'Height of the number input component.',
      inheritsFrom: '--ard-form-field-height',
      default: '2.3125rem',
    },
    {
      name: '--ard-number-input-height-compact',
      description: 'Height of the number input component in compact mode.',
      inheritsFrom: '--ard-form-field-height-compact',
      default: '1.6875rem',
    },
    {
      name: '--ard-number-input-gap',
      description: 'Gap between internal number input elements.',
      default: '0.625rem',
    },
    {
      name: '--ard-number-input-font-size',
      description: 'Font size of the number input component.',
      inheritsFrom: '--ard-form-field-font-size',
      default: '1rem',
    },
    {
      name: '--ard-number-input-font-size-compact',
      description: 'Font size of the number input component in compact mode.',
      inheritsFrom: '--ard-form-field-font-size-compact',
      default: '0.875rem',
    },
    {
      name: '--ard-number-input-line-height',
      description: 'Line height of the number input value.',
      default: '1.25',
    },
    {
      name: '--ard-number-input-line-height-compact',
      description: 'Line height of the number input value in compact mode.',
      default: '1',
    },
    {
      name: '--ard-number-input-font-weight',
      description: 'Font weight of the number input value.',
      default: '400',
    },
    {
      name: '--ard-number-input-padding-top',
      description: 'Top padding of the number input.',
      inheritsFrom: '--ard-form-field-padding-top',
      default: '0',
    },
    {
      name: '--ard-number-input-padding-right',
      description: 'Right padding of the number input.',
      inheritsFrom: '--ard-form-field-padding-right',
      default: '0.375rem',
    },
    {
      name: '--ard-number-input-padding-bottom',
      description: 'Bottom padding of the number input.',
      inheritsFrom: '--ard-form-field-padding-bottom',
      default: '0',
    },
    {
      name: '--ard-number-input-padding-left',
      description: 'Left padding of the number input.',
      inheritsFrom: '--ard-form-field-padding-left',
      default: '0.375rem',
    },
    {
      name: '--ard-number-input-padding-top-compact',
      description: 'Top padding of the number input in compact mode.',
      inheritsFrom: '--ard-form-field-padding-top-compact',
      default: '0',
    },
    {
      name: '--ard-number-input-padding-right-compact',
      description: 'Right padding of the number input in compact mode.',
      inheritsFrom: '--ard-form-field-padding-right-compact',
      default: '0.375rem',
    },
    {
      name: '--ard-number-input-padding-bottom-compact',
      description: 'Bottom padding of the number input in compact mode.',
      inheritsFrom: '--ard-form-field-padding-bottom-compact',
      default: '0',
    },
    {
      name: '--ard-number-input-padding-left-compact',
      description: 'Left padding of the number input in compact mode.',
      inheritsFrom: '--ard-form-field-padding-left-compact',
      default: '0.375rem',
    },
    {
      name: '--ard-number-input-color',
      description: 'Text color of the number input value.',
      inheritsFrom: '--ard-text',
      default: 'rgba(0, 0, 0, 100%)',
    },
    {
      name: '--ard-number-input-placeholder-color',
      description: 'Text color of the number input placeholder.',
      inheritsFrom: '--ard-text',
      default: 'rgba(0, 0, 0, 100%)',
    },
    {
      name: '--ard-number-input-placeholder-opacity',
      description: 'Opacity of the number input placeholder.',
      default: '60%',
    },
    {
      name: '--ard-number-input-disabled-opacity',
      description: 'Opacity of the number input when disabled.',
      default: '50%',
    },
    {
      name: '--ard-number-input-width',
      description: 'Width of the host <code>ard-number-input</code> element.',
      default: 'unset',
    },
    {
      name: '--ard-number-input-rounded-border-radius',
      description: 'Border radius used for the rounded variant of the number input.',
      default: '8px',
    },
  ],
};