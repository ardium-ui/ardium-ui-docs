import { StylingPageData } from 'src/app/components/styling-page';

export const FormFieldStylingData: StylingPageData = {
  name: 'Form Field',
  variables: [
    {
      name: '--ard-form-field-label-padding',
      description: 'Padding of the form field label.',
      default: '0.25rem 0 0.125rem 0.125rem',
    },
    {
      name: '--ard-form-field-label-font-size',
      description: 'Font size of the form field label.',
      default: '0.9375rem',
    },
    {
      name: '--ard-form-field-label-font-weight',
      description: 'Font weight of the form field label.',
      default: '500',
    },
    {
      name: '--ard-form-field-label-required-font-weight',
      description: 'Font weight of the <em>required</em> indicator text.',
      default: '500',
    },
    {
      name: '--ard-form-field-label-required-font-size',
      description: 'Font size of the <em>required</em> indicator text.',
      default: '112.5%',
    },
    {
      name: '--ard-form-field-label-required-color',
      description: 'Text color of the <em>required</em> indicator.',
      default: 'orangered',
    },
    {
      name: '--ard-form-field-label-optional-font-weight',
      description: 'Font weight of the <em>optional</em> indicator text.',
      default: '400',
    },
    {
      name: '--ard-form-field-label-optional-font-size',
      description: 'Font size of the <em>optional</em> indicator text.',
      default: '0.8125rem',
    },
    {
      name: '--ard-form-field-label-optional-color',
      description: 'Text color of the <em>optional</em> indicator.',
      inheritsFrom: '--ard-text2',
      default: 'rgba(0, 0, 0, 87%)',
    },
    {
      name: '--ard-form-field-label-optional-font-style',
      description: 'Font style of the <em>optional</em> indicator text.',
      default: 'italic',
    },
    {
      name: '--ard-form-field-error-color',
      description: 'Text color used for error states.',
      inheritsFrom: '--ard-danger-700',
      default: 'rgb(202, 17, 14)',
    },
    {
      name: '--ard-form-field-success-color',
      description: 'Text color used for success states.',
      inheritsFrom: '--ard-success-700',
      default: 'rgb(27, 131, 33)',
    },
    {
      name: '--ard-form-field-hint-padding',
      description: 'Padding of the hint and error container.',
      default: '0.125rem 0 0.25rem 0.125rem',
    },
    {
      name: '--ard-form-field-hint-font-size',
      description: 'Font size of hint and error text.',
      default: '0.8125rem',
    },
    {
      name: '--ard-form-field-hint-line-height',
      description: 'Line height of hint text.',
      default: '1.1',
    },
    {
      name: '--ard-form-field-hint-right-padding-left',
      description: 'Left padding for right-aligned hints and errors.',
      default: '0.5rem',
    },
    {
      name: '--ard-form-field-hint-error-line-height',
      description: 'Line height for hint and error rows.',
      default: '1.2',
    },
    {
      name: '--ard-form-field-hint-error-gap',
      description: 'Gap between icon and text in hint and error rows.',
      default: '0.375em',
    },
    {
      name: '--ard-form-field-label-disabled-opacity',
      description: 'Opacity of the label when the form field is disabled.',
      default: '40%',
    },
    {
      name: '--ard-form-field-hint-disabled-opacity',
      description: 'Opacity of hints when the form field is disabled.',
      default: '50%',
    },
    {
      name: '--ard-form-field-error-animation-duration',
      description: 'Duration of the error appearance animation.',
      default: '0.25s',
    },
    {
      name: '--ard-horizontal-form-field-gap',
      description: 'Gap between label and control in horizontal form fields.',
      default: '0.5rem',
    },
    {
      name: '--ard-horizontal-form-field-label-width',
      description: 'Width of the label column in horizontal form fields.',
      default: '12rem',
    },
    {
      name: '--ard-horizontal-form-field-label-align',
      description: 'Horizontal alignment of the label in horizontal form fields.',
      default: 'flex-start',
    },
  ],
};
