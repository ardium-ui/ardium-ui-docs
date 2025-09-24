import { ExceptionsPageData } from 'src/app/components/exceptions-page/exceptions-page.types';

export const FormFieldExceptionsData: ExceptionsPageData = {
  name: 'Persistent signal',
  exceptions: [
    {
      name: 'ArdiumFormFieldComponent',
      exceptions: [
        {
          code: 'ARD-FT5110',
          exceptionText:
            'Form field component requires any control (input) to be present within the element. Found none.',
          description: [
            "This exceptions is raised if the form field doesn't contain any child that provides the <code>ARD_FORM_FIELD_CONTROL</code> injection token.",
            'All form fields must contain a valid <code>ARD_FORM_FIELD_CONTROL</code> child for the form field to work correctly.',
          ],
        },
      ],
    },
    {
      name: 'ArdiumHorizontalFormFieldComponent',
      exceptions: [
        {
          code: 'ARD-FT5110',
          exceptionText:
            'Form field component requires any control (input) to be present within the element. Found none.',
          description: [
            "This exceptions is raised if the form field doesn't contain any child that provides the <code>ARD_FORM_FIELD_CONTROL</code> injection token.",
            'All form fields must contain a valid <code>ARD_FORM_FIELD_CONTROL</code> child for the form field to work correctly.',
          ],
        },
      ],
    },
    {
      name: 'ArdiumLabelComponent',
      exceptions: [
        {
          code: 'ARD-NF5120',
          exceptionText: 'Cannot set a form field label to be both required and optional.',
          description: [
            'This exceptions is raised if the label has both <code>[required]</code> and <code>[optional]</code> set to true.',
            'These inputs are mutually exclussive and cannot coexist on a single element.',
          ],
        },
      ],
    },
    {
      name: 'ArdiumHintComponent',
      exceptions: [
        {
          code: 'ARD-NF5130',
          exceptionText: 'Cannot align a form field hint to both left and right.',
          description: [
            'This exceptions is raised if the hint has both <code>[left]</code> and <code>[right]</code> set to true.',
            'These inputs are mutually exclussive and cannot coexist on a single element.',
          ],
        },
      ],
    },
    {
      name: 'ArdiumErrorComponent',
      exceptions: [
        {
          code: 'ARD-NF5140',
          exceptionText: 'Cannot align a form field error to both left and right.',
          description: [
            'This exceptions is raised if the error has both <code>[left]</code> and <code>[right]</code> set to true.',
            'These inputs are mutually exclussive and cannot coexist on a single element.',
          ],
        },
      ],
    },
    {
      name: 'ArdiumHintErrorComponent',
      exceptions: [
        {
          code: 'ARD-NF5150',
          exceptionText: 'Cannot align a form field hint-error to both left and right.',
          description: [
            'This exceptions is raised if the hint-error has both <code>[left]</code> and <code>[right]</code> set to true.',
            'These inputs are mutually exclussive and cannot coexist on a single element.',
          ],
        },
      ],
    },
  ],
};
