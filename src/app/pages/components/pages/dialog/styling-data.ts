import { StylingPageData } from 'src/app/components/styling-page';

export const DialogStylingData: StylingPageData = {
  name: 'Dialogs',
  variables: [
    {
      name: '--ard-modal-viewport-spacing',
      description: 'Minimum spacing between the modal panel and the viewport edges.',
      default: '2rem',
    },
    {
      name: '--ard-modal-padding',
      description: 'Base padding of the modal panel.',
      default: '1.25rem',
    },
    {
      name: '--ard-modal-padding-top',
      description: 'Top padding of the modal panel.',
      default: '1rem',
    },
    {
      name: '--ard-modal-gap',
      description: 'Vertical gap between modal panel sections.',
      default: '1.5rem',
    },
    {
      name: '--ard-modal-bg',
      description: 'Background color of the modal panel.',
      inheritsFrom: '--ard-bg',
      default: 'var(--ard-bg)',
    },
    {
      name: '--ard-modal-no-heading-gap',
      description: 'Gap used when the modal has no heading text.',
      default: '0.25rem',
    },
    {
      name: '--ard-modal-close-button-offset',
      description: 'Offset of the close button from the top-right corner.',
      default: '0.5rem',
    },
    {
      name: '--ard-modal-heading-padding-right',
      description: 'Right padding of the modal heading when a close button is present.',
      default: '2rem',
    },
    {
      name: '--ard-modal-heading-font-size',
      description: 'Font size of the modal heading text.',
      default: '1.25rem',
    },
    {
      name: '--ard-modal-heading-font-weight',
      description: 'Font weight of the modal heading text.',
      default: '500',
    },
    {
      name: '--ard-modal-heading-color',
      description: 'Text color of the modal heading.',
      inheritsFrom: '--ard-text',
      default: 'var(--ard-text)',
    },
    {
      name: '--ard-modal-rounded-border-radius',
      description: 'Border radius of the modal panel when using the rounded variant.',
      default: '8px',
    },
    {
      name: '--ard-modal-font-size',
      description: 'Base font size of modal content.',
      default: '1rem',
    },
    {
      name: '--ard-modal-font-size-compact',
      description: 'Font size of modal content in compact mode.',
      default: '0.875rem',
    },
    {
      name: '--ard-modal-padding-compact',
      description: 'Padding of the modal panel in compact mode.',
      default: '0.75rem 2rem 1rem 2rem',
    },
    {
      name: '--ard-modal-gap-compact',
      description: 'Gap between modal sections in compact mode.',
      default: '1rem',
    },
    {
      name: '--ard-modal-close-button-offset-compact',
      description: 'Offset of the close button in compact mode.',
      default: '0.25rem',
    },
    {
      name: '--ard-dialog-content-actions-gap',
      description: 'Gap between dialog content and action sections.',
      default: '1rem',
    },
    {
      name: '--ard-dialog-buttons-gap',
      description: 'Gap between buttons inside the dialog actions area.',
      default: '1rem',
    },
  ],
};
