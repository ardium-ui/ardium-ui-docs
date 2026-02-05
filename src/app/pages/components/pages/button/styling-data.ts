import { StylingPageData } from 'src/app/components/styling-page';

export const ButtonStylingData: StylingPageData = {
  name: 'Button',
  variables: [
    {
      name: '--ard-button-height',
      description: 'Default height of the button.',
      default: '2.5em',
    },
    {
      name: '--ard-button-height-compact',
      description: 'Height of the button in compact mode.',
      default: '2.25em',
    },
    {
      name: '--ard-button-margin',
      description: 'Outer margin of the button.',
      default: '0.125rem',
    },
    {
      name: '--ard-button-padding',
      description: 'Horizontal padding of the button.',
      default: '0 1.2em',
    },
    {
      name: '--ard-button-padding-compact',
      description: 'Horizontal padding of the button in compact mode.',
      default: '0 0.9em',
    },
    {
      name: '--ard-button-padding-vertical',
      description: 'Padding of the button when using the vertical layout.',
      default: '0.3em 1em',
    },
    {
      name: '--ard-button-padding-vertical-compact',
      description: 'Padding of the vertical button in compact mode.',
      default: '0.2em 0.8em',
    },
    {
      name: '--ard-button-gap',
      description: 'Gap between button content items (icon, text, etc.).',
      default: '0.375rem',
    },
    {
      name: '--ard-button-font-size',
      description: 'Font size of the button text.',
      default: '0.875rem',
    },
    {
      name: '--ard-button-font-size-compact',
      description: 'Font size of the button text in compact mode.',
      default: '0.75rem',
    },
    {
      name: '--ard-button-font-weight',
      description: 'Font weight of the button text.',
      default: '500',
    },
    {
      name: '--ard-button-overlay-hover-opacity',
      description: 'Opacity of the interaction overlay on hover.',
      default: '0.04',
    },
    {
      name: '--ard-button-overlay-focus-opacity',
      description: 'Opacity of the interaction overlay on focus.',
      default: '0.12',
    },
    {
      name: '--ard-button-overlay-active-opacity',
      description: 'Opacity of the interaction overlay on active state.',
      default: '0.18',
    },
    {
      name: '--ard-button-overlay-focus-visible-opacity',
      description: 'Opacity of the interaction overlay when focus is visible.',
      default: '0.24',
    },
    {
      name: '--ard-button-overlay-disabled-opacity',
      description: 'Opacity of the interaction overlay when the button is disabled.',
      default: '0.2',
    },
    {
      name: '--ard-button-rounded-corner-radius',
      description:
        'Border radius for rounded button variants. Falls back to the global rounded corner radius.',
      inheritsFrom: '--ard-rounded-corner-radius',
      default: '0.375rem',
    },
    {
      name: '--ard-button-disabled-opacity',
      description: 'Overall opacity of the button when disabled.',
      default: '0.6',
    },
  ],
};
