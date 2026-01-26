import { StylingPageData } from 'src/app/components/styling-page';

export const sliderStylingData: StylingPageData = {
  name: 'Slider',
  variables: [
    {
      name: '--ard-slider-font-size',
      description: 'Font size of the slider component.',
      inheritsFrom: '--ard-form-field-font-size',
      default: '1rem',
    },
    {
      name: '--ard-slider-font-size-compact',
      description: 'Font size of the slider component in compact mode.',
      inheritsFrom: '--ard-form-field-font-size-compact',
      default: '0.875rem',
    },
    {
      name: '--ard-slider-width',
      description: 'Width of the slider component.',
      default: '100%',
    },
    {
      name: '--ard-slider-padding',
      description: 'Padding of the slider component.',
      default: '0 calc(var(--ard-slider-handle-size, 1.25em) / 2)',
    },
    {
      name: '--ard-slider-track-height',
      description: 'Height of the slider track.',
      default: '0.25em',
    },
    {
      name: '--ard-slider-track-color',
      description: 'Background color of the slider track.',
      default: 'var(--ard-cmpcl--bg-colored)',
    },
    {
      name: '--ard-slider-track-opacity',
      description: 'Opacity of the slider track.',
      default: '20%',
    },
    {
      name: '--ard-slider-track-border-radius',
      description: 'Border radius of the slider track.',
      default: '9999px',
    },
    {
      name: '--ard-slider-active-track-height',
      description: 'Height of the active part of the slider track.',
      default: 'calc(100% + 0.125em)',
    },
    {
      name: '--ard-slider-active-color',
      description: 'Background color of the active part of the slider track.',
      default: 'var(--ard-cmpcl--bg-colored)',
    },
    {
      name: '--ard-slider-active-track-opacity',
      description: 'Opacity of the active part of the slider track.',
      default: '100%',
    },
    {
      name: '--ard-slider-value-tick-size',
      description: 'Size of the value ticks on the slider track.',
      default: '0.125em',
    },
    {
      name: '--ard-slider-value-tick-opacity',
      description: 'Opacity of the value ticks on the slider track.',
      default: '30%',
    },
    {
      name: '--ard-slider-hitbox-size',
      description: 'Size of the hitbox around the slider track for easier interaction.',
      default: 'calc(var(--ard-slider-handle-size, 1.25em) / 2)',
    },
    {
      name: '--ard-slider-handle-size',
      description: 'Size of the slider handle.',
      default: '1.25em',
    },
    {
      name: '--ard-slider-handle-bg',
      description: 'Background color of the slider handle.',
      default: 'var(--ard-cmpcl--bg-colored)',
    },
    {
      name: '--ard-slider-handle-border',
      description: 'Border of the slider handle.',
      default: 'none',
    },
    {
      name: '--ard-slider-handle-border-radius',
      description: 'Border radius of the slider handle.',
      default: '9999px',
    },
    {
      name: '--ard-slider-handle-hitbox-size',
      description: 'Size of the hitbox around the slider handle for easier interaction.',
      default: '0.375em',
    },
    {
      name: '--ard-slider-handle-overlay-size',
      description: 'Size of the focus overlay on the slider handle.',
      default: '0.5em',
    },
    {
      name: '--ard-slider-handle-overlay-hover-opacity',
      description: 'Opacity of the focus overlay on hover state of the slider handle.',
      default: '7.5%',
    },
    {
      name: '--ard-slider-handle-overlay-focus-opacity',
      description: 'Opacity of the focus overlay on focus state of the slider handle.',
      default: '15%',
    },
    {
      name: '--ard-slider-handle-overlay-active-opacity',
      description: 'Opacity of the focus overlay on active state of the slider handle.',
      default: '25%',
    },
    {
      name: '--ard-slider-label-font-size',
      description: 'Font size of the slider label (tooltip).',

      default: '0.875rem',
    },
    {
      name: '--ard-slider-label-padding-top',
      description: 'Padding top of the slider label (tooltip) container.',
      default: '0.2em',
    },
    {
      name: '--ard-slider-label-bg',
      description: 'Background color of the slider label (tooltip).',
      inheritsFrom: '--ard-text3',
      default: 'rgba(0, 0, 0, 75%)',
    },
    {
      name: '--ard-slider-label-color',
      description: 'Text color of the slider label (tooltip).',
      inheritsFrom: '--ard-text2-alt',
      default: 'rgba(255, 255, 255, 87%)',
    },
    {
      name: '--ard-slider-label-height',
      description: 'Height of the slider label (tooltip).',
      default: '2em',
    },
    {
      name: '--ard-slider-label-border',
      description: 'Border of the slider label (tooltip).',
      default: 'none',
    },
    {
      name: '--ard-slider-label-border-radius',
      description: 'Border radius of the slider label (tooltip).',
      default: '0.375em',
    },
    {
      name: '--ard-slider-label-padding',
      description: 'Padding of the slider label (tooltip).',
      default: '0 0.75em',
    },
    {
      name: '--ard-slider-label-font-weight',
      description: 'Font weight of the slider label (tooltip).',
      default: '500',
    },
    {
      name: '--ard-slider-label-arrow-size',
      description: 'Size of the arrow on the slider label (tooltip).',
      default: '0.375em',
    },
    {
      name: '--ard-slider-label-offset',
      description: 'Offset distance of the slider label (tooltip) from the handle.',
      default: '0.5em',
    },
  ],
};
