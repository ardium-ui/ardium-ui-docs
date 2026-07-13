import { StylingPageData } from 'src/app/components/styling-page';

export const DividerStylingData: StylingPageData = {
  name: 'Divider',
  variables: [
    {
      name: '--ard-divider-margin-size',
      description: 'Margin around the divider line.',
      default: '0.5rem',
    },
    {
      name: '--ard-divider-color',
      description: 'Line color of the divider.',
      default: 'theme detail ultralight color',
    },
    {
      name: '--ard-divider-width',
      description: 'Thickness of the divider line.',
      default: '1px',
    },
    {
      name: '--ard-divider-middle-inset',
      description: 'Horizontal inset used by the middle variant.',
      default: '1rem',
    },
    {
      name: '--ard-divider-content-padding',
      description: 'Spacing between projected content and divider lines.',
      default: '0.5rem',
    },
    {
      name: '--ard-divider-content-font-size',
      description: 'Font size of divider projected content.',
      default: '0.875rem',
    },
    {
      name: '--ard-divider-align-inset',
      description: 'Width of shortened segment for start/end content alignment.',
      default: '10%',
    },
    {
      name: '--ard-divider-align-min-inset',
      description: 'Minimum width for alignment inset segment.',
      default: '1rem',
    },
    {
      name: '--ard-divider-align-max-inset',
      description: 'Maximum width for alignment inset segment.',
      default: 'unset',
    },
    {
      name: '--ard-divider-style',
      description: 'Border style used by divider pseudo-elements.',
      default: 'solid',
    },
  ],
};
