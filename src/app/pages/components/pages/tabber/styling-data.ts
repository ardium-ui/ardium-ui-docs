import { StylingPageData } from 'src/app/components/styling-page';

export const tabberStylingData: StylingPageData = {
  name: 'Tabber',
  variables: [
    {
      name: '--ard-tabber-tab-height',
      description: 'The height of each tab in the tabber.',
      default: '2.5em',
    },
    {
      name: '--ard-tabber-tab-font-size',
      description: 'The font size of the tab labels.',
      default: '0.875rem',
    },
    {
      name: '--ard-tabber-tab-font-weight',
      description: 'The font weight of the tab labels.',
      default: '500',
    },
    {
      name: '--ard-tabber-tab-border',
      description: 'The border style of each tab.',
      default: 'none',
    },
    {
      name: '--ard-tabber-tab-background',
      description: 'The background style of each tab.',
      default: 'none',
    },
    {
      name: '--ard-tabber-tab-padding',
      description: 'The padding inside each tab.',
      default: '0 1.5rem',
    },
    {
      name: '--ard-tabber-tab-gap',
      description: 'The gap between tabs.',
      default: '0',
    },
    {
      name: '--ard-tabber-tab-content-gap',
      description: 'The gap between the content elements inside each tab. Only applicable when using custom templates for tab labels.',
      default: '0.5rem',
    },
    {
      name: '--ard-tabber-separator-border',
      description: 'The border style of the separator between tabs.',
      default: '1px solid rgba(0, 0, 0, 12%)',
      inheritsFrom: '--ard-detail-ultralight',
    },
    {
      name: '--ard-tabber-tab-overlay-color',
      description: 'The overlay color for tab interactions (hover, active, focus).',
      default: 'black',
      inheritsFrom: '--ard-bg-alt',
    },
    {
      name: '--ard-tabber-tab-hover-opacity',
      description: 'The opacity of the overlay color when a tab is hovered.',
      default: '4%',
    },
    {
      name: '--ard-tabber-tab-active-opacity',
      description: 'The opacity of the overlay color when a tab is active.',
      default: '12%',
    },
    {
      name: '--ard-tabber-tab-focus-visible-opacity',
      description: 'The opacity of the overlay color when a tab is focused.',
      default: '18%',
    },
  ],
};
