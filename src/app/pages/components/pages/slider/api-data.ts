import dedent from 'dedent';
import { ApiPageData } from 'src/app/components/api-page';

export const SliderApiData: ApiPageData = {
  name: 'Slider',
  modules: [
    {
      name: 'ArdiumSliderModule',
      description: 'Module that declares and exports the ArdiumSliderComponent and ArdSliderTooltipDirective.',
      exports: ['ArdiumSliderComponent', 'ArdSliderTooltipDirective'],
    },
    {
      name: 'ArdiumRangeSliderModule',
      description: 'Module that declares and exports the ArdiumRangeSliderComponent.',
      exports: ['ArdiumRangeSliderComponent'],
    },
  ],
  components: [
    {
      name: 'ArdiumSliderComponent',
      exportedFrom: 'ArdiumSliderModule',
      description:
        'A highly configurable slider component supporting tooltips, keyboard interactions, and custom labels.',
      selector: 'ard-slider',
      inputs: [
        {
          name: 'min',
          type: 'number',
          description: 'The minimum selectable value.',
          default: '0',
        },
        {
          name: 'max',
          type: 'number',
          description: 'The maximum selectable value.',
          default: '100',
        },
        {
          name: 'step',
          type: 'number',
          description: 'The step interval between selectable values. Must be > 0.',
          default: '1',
        },
        {
          name: 'shiftMultiplier',
          type: 'number',
          description: 'Multiplier applied when adjusting value with the shift key.',
          default: '5',
        },
        {
          name: 'showValueTicks',
          type: 'boolean',
          description: 'Whether to show tick marks along the slider track.',
          default: 'false',
        },
        {
          name: 'labelPosition',
          type: 'SliderDecorationPosition',
          description: 'The position of value labels around the slider track.',
          default: 'SliderDecorationPosition.Bottom',
        },
        {
          name: 'labels',
          type: 'SliderLabelObject[] | number[] | string | null | undefined',
          description: `Custom labels for the slider. Accepts:
          <ul>
            <li><code>SliderLabelObject[]</code>: objects with label and value</li>
            <li><code>number[]</code>: values to be displayed as labels</li>
            <li><code>string</code>: comma-separated numeric values</li>
          </ul>`,
          default: '[]',
        },
        {
          name: 'color',
          type: 'SimpleComponentColor',
          description: 'Color theme of the slider.',
          default: 'SimpleComponentColor.Primary',
        },
        {
          name: 'compact',
          type: 'boolean',
          description: 'Enables a more compact UI layout.',
          default: 'false',
        },
        {
          name: 'noTooltip',
          type: 'boolean',
          description: 'Disables the value tooltip on hover or drag.',
          default: 'false',
        },
        {
          name: 'tooltipFormatFn',
          type: 'SliderTooltipFormatFn',
          description: 'Function to format the tooltip value.',
          default: 'v => v',
        },
        {
          name: 'tooltipPosition',
          type: 'SliderDecorationPosition',
          description: `Position of the tooltip relative to the handle.
          <ul>
            <li><code>'top'</code>: Tooltip appears above the handle.</li>
            <li><code>'bottom'</code>: Tooltip appears below the handle.</li>
          </ul>`,
          default: 'SliderDecorationPosition.Top',
        },
        {
          name: 'tooltipBehavior',
          type: 'SliderTooltipBehavior',
          description: `Controls when tooltips appear.
          <ul>
            <li><code>'always'</code>: Tooltip is always visible.</li>
            <li><code>'auto'</code>: Tooltip appears on hover or drag.</li>
            <li><code>'never'</code>: Tooltip is disabled.</li>
          </ul>`,
          default: 'SliderTooltipBehavior.Auto',
        },
      ],
      twoWayBindings: [
        {
          name: 'value',
          type: 'number',
          description: 'The current value of the slider.',
          required: false,
        },
      ],
      publicMethods: [
        {
          name: 'writeValue',
          description: 'Updates the internal slider value from external sources (e.g., forms).',
          params: [
            {
              name: 'v',
              type: 'any',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'cleanupValueAfterMinMaxStepChange',
          description: 'Ensures that the current value is valid after changes to min, max, or step.',
          returnType: 'void',
        },
        {
          name: 'reset',
          description: 'Resets the slider value to 0.',
          returnType: 'void',
        },
        {
          name: 'increment',
          description: 'Increments the slider value by the given number of steps.',
          params: [
            {
              name: 'steps',
              type: 'number',
              default: '1',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'decrement',
          description: 'Decrements the slider value by the given number of steps.',
          params: [
            {
              name: 'steps',
              type: 'number',
              default: '1',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'onTrackHitboxPointerDown',
          description: 'Handles pointer down events on the track.',
          params: [
            {
              name: 'event',
              type: 'MouseEvent | TouchEvent',
            },
          ],
          returnType: 'void',
        },
        {
          name: 'onPointerMove',
          description: 'Handles pointer move events for dragging the slider handle.',
          params: [
            {
              name: 'event',
              type: 'MouseEvent | TouchEvent',
            },
          ],
          returnType: 'void',
        },
      ],
      templates: [
        {
          name: 'Tooltip Template',
          description: 'Custom template for the slider tooltip.',
          context: [
            {
              name: 'value',
              type: 'string | number',
              description: 'The current value of the slider.',
            },
            {
              name: '$implicit',
              type: 'string | number',
              description: 'The current value of the slider.',
            },
          ],
          selector: 'ng-template[ard-slider-tooltip-tmp]',
          defaultHtmlContent: dedent`
            <ng-template let-value>
              <div class="ard-slider-tooltip">{{ value }}</div>
            </ng-template>
          `,
        },
      ],
    },
    {
      name: 'ArdiumRangeSliderComponent',
      exportedFrom: 'ArdiumRangeSliderModule',
      description:
        'A dual-handle slider that lets users select a range between two numeric values. Supports tooltip customization, keyboard navigation, minimum distance enforcement, and dynamic label rendering.',
      selector: 'ard-range-slider',
      inputs: [
        {
          name: 'min',
          type: 'number',
          description: 'The minimum selectable value.',
          default: '0',
        },
        {
          name: 'max',
          type: 'number',
          description: 'The maximum selectable value.',
          default: '100',
        },
        {
          name: 'step',
          type: 'number',
          description: 'The step interval between selectable values. Must be > 0.',
          default: '1',
        },
        {
          name: 'shiftMultiplier',
          type: 'number',
          description: 'Multiplier applied when adjusting value with the shift key.',
          default: '5',
        },
        {
          name: 'showValueTicks',
          type: 'boolean',
          description: 'Whether to show tick marks along the slider track.',
          default: 'false',
        },
        {
          name: 'labelPosition',
          type: 'SliderDecorationPosition',
          description: 'The position of value labels around the slider track.',
          default: 'SliderDecorationPosition.Bottom',
        },
        {
          name: 'labels',
          type: 'SliderLabelObject[] | number[] | string | null | undefined',
          description: `Custom labels for the slider. Accepts:
<ul>
<li><code>SliderLabelObject[]</code>: objects with label and value</li>
<li><code>number[]</code>: values to be displayed as labels</li>
<li><code>string</code>: comma-separated numeric values</li>
</ul>`,
          default: '[]',
        },
        {
          name: 'color',
          type: 'SimpleComponentColor',
          description: 'Color theme of the slider.',
          default: 'SimpleComponentColor.Primary',
        },
        {
          name: 'compact',
          type: 'boolean',
          description: 'Enables a more compact UI layout.',
          default: 'false',
        },
        {
          name: 'noTooltip',
          type: 'boolean',
          description: 'Disables the value tooltip on hover or drag.',
          default: 'false',
        },
        {
          name: 'tooltipFormatFn',
          type: 'SliderTooltipFormatFn',
          description: 'Function to format the tooltip value.',
          default: 'v => v',
        },
        {
          name: 'tooltipPosition',
          type: 'SliderDecorationPosition',
          description: `Position of the tooltip relative to the handle.
          <ul>
            <li><code>'top'</code>: Tooltip appears above the handle.</li>
            <li><code>'bottom'</code>: Tooltip appears below the handle.</li>
          </ul>`,
          default: 'SliderDecorationPosition.Top',
        },
        {
          name: 'tooltipBehavior',
          type: 'SliderTooltipBehavior',
          description: `Controls when tooltips appear.
          <ul>
            <li><code>'always'</code>: Tooltip is always visible.</li>
            <li><code>'auto'</code>: Tooltip appears on hover or drag.</li>
            <li><code>'never'</code>: Tooltip is disabled.</li>
          </ul>`,
          default: 'SliderTooltipBehavior.Auto',
        },
        {
          name: 'selectionBehavior',
          type: 'ArdRangeSelectionBehavior',
          description: `Defines how handles behave when reaching the minimum distance.
          <ul>
            <li><code>'push'</code>: Moving one handle pushes the other.</li>
            <li><code>'allow'</code>: Handles can overlap.</li>
            <li><code>'block'</code>: Handles stop at the minimum distance.</li>
          </ul>`,
          default: 'ArdRangeSelectionBehavior.Allow',
        },
        {
          name: 'minimumDistance',
          type: 'number',
          description: 'Minimum distance in steps between the two handles.',
          default: '0',
        },
      ],
      twoWayBindings: [
        {
          name: 'value',
          type: 'SliderRange',
          description: 'The currently selected numeric range.',
          required: false,
        },
      ],
    },
  ],
  directives: [
    {
      name: 'ArdSliderTooltipDirective',
      exportedFrom: 'ArdiumSliderModule',
      description: 'Structural directive used to define a custom tooltip template for the slider.',
      selector: 'ng-template[ard-slider-tooltip-tmp]',
    },
  ],
  interfaces: [
    {
      name: 'SliderTooltipContext',
      description: 'Context passed to the tooltip template.',
      properties: [
        {
          name: 'value',
          type: 'string | number',
        },
        {
          name: '$implicit',
          type: 'string | number',
        },
      ],
    },
    {
      name: 'SliderLabelObject',
      description: 'Defines a label to be rendered on the slider track.',
      properties: [
        {
          name: 'label',
          type: 'string | number',
        },
        {
          name: 'value',
          type: 'number',
        },
      ],
    },
    {
      name: 'ArdSliderDefaults',
      description: 'Type used for providing default values for the slider and range slider.',
    },
  ],
  enums: [
    {
      name: 'SliderTooltipBehavior',
      description: 'Defines when the tooltip is shown on the slider.',
      definition: dedent`
        export const SliderTooltipBehavior = {
          Always: 'always',
          Auto: 'auto',
          Never: 'never',
        } as const;
        export type SliderTooltipBehavior = typeof SliderTooltipBehavior[keyof typeof SliderTooltipBehavior];`,
    },
    {
      name: 'SliderDecorationPosition',
      description: 'Defines top or bottom positioning for labels or tooltips.',
      definition: dedent`
        export const SliderDecorationPosition = {
          Top: 'top',
          Bottom: 'bottom',
        } as const;
        export type SliderDecorationPosition = typeof SliderDecorationPosition[keyof typeof SliderDecorationPosition];`,
    },
    {
      name: 'ArdRangeSelectionBehavior',
      description: 'Enum describing how the two handles behave when reaching the minimum distance constraint.',
      definition: dedent`
        export const ArdRangeSelectionBehavior = {
          Push: 'push',
          Allow: 'allow',
          Block: 'block',
        } as const;
        export type ArdRangeSelectionBehavior = typeof ArdRangeSelectionBehavior[keyof typeof ArdRangeSelectionBehavior];`,
    },
  ],
  injectionTokens: [
    {
      name: 'ARD_SLIDER_DEFAULTS',
      type: 'InjectionToken<ArdSliderDefaults>',
      description:
        'Injection token providing default configuration values for the slider component and range slider component.',
    },
  ],
  functions: [
    {
      name: 'provideSliderDefaults',
      description:
        'Function used to provide default values for the slider and range slider, merging them with library defaults.',
      returnType: 'Provider',
      params: [
        {
          name: 'config',
          type: 'Partial<ArdSliderDefaults>',
          description: 'Object containing the new default values for the slider and range slider.',
        },
      ],
    },
  ],
};
