import { StylingPageData } from 'src/app/components/styling-page';

export const IconButtonStylingData: StylingPageData = {
  name: 'Icon Button',
  variables: [
    {
      name: '--ard-icon-button-size',
      description: 'Width and height of the button.',
      default: '2.1875em',
    },
    {
      name: '--ard-icon-button-size-compact',
      description: 'Width and height of the button in compact mode.',
      default: '2.25em',
    },
    {
      name: '--ard-icon-button-margin',
      description: 'Outer margin of the button.',
      default: '0.125rem',
    },
    {
      name: '--ard-icon-button-font-size',
      description: 'Font size of the button content.',
      default: '1rem',
    },
    {
      name: '--ard-icon-button-icon-font-size',
      description: 'Font size of the icon in the button.',
      default: '1.5em',
    },
    {
      name: '--ard-icon-button-font-size-compact',
      description: 'Font size of the button content in compact mode.',
      default: '0.75rem',
    },
    {
      name: '--ard-icon-button-font-weight',
      description: 'Font weight of the button content.',
      default: '600',
    },
    {
      name: '--ard-icon-button-overlay-hover-opacity',
      description: 'Opacity of the overlay shown on hover.',
      default: '0.04',
    },
    {
      name: '--ard-icon-button-overlay-focus-opacity',
      description: 'Opacity of the overlay shown on focus.',
      default: '0.12',
    },
    {
      name: '--ard-icon-button-overlay-active-opacity',
      description: 'Opacity of the overlay shown on active state.',
      default: '0.18',
    },
    {
      name: '--ard-icon-button-overlay-focus-visible-opacity',
      description: 'Opacity of the overlay shown on focus visible state.',
      default: '0.24',
    },
    {
      name: '--ard-icon-button-overlay-disabled-opacity',
      description: 'Opacity of the overlay shown on disabled state.',
      default: '0.2',
    },
    {
      name: '--ard-icon-button-disabled-opacity',
      description: 'Opacity of the button itself when disabled.',
      default: '0.6',
    },
    {
      name: '--ard-icon-button-disabled-cursor',
      description: 'Cursor style of the button when disabled.',
      inheritsFrom: '--ard-button-disabled-cursor',
      default: 'not-allowed',
    },
  ],
};
