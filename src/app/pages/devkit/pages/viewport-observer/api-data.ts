import { ApiPageData } from 'src/app/components/api-page';

export const ViewportObserverApiData: ApiPageData = {
  name: 'Viewport Observer',
  services: [
    {
      name: 'ArdiumViewportObserverService',
      description: 'Service for observing the visibility of elements within the viewport.',
      providedIn: 'root',
      methods: [
        {
          name: 'setScrollHost',
          description:
            'Sets the element that will trigger the viewport observation (e.g., document or custom element).',
          params: [
            {
              name: 'element',
              type: 'HTMLElement | Document',
              description: 'The element or document to observe for scroll events.',
              required: true,
            },
          ],
          returnType: 'void',
        },
        {
          name: 'observeElement',
          description:
            'Observes an element and tracks its visibility within the viewport, based on the provided configuration.',
          params: [
            {
              name: 'element',
              type: 'HTMLElement | ElementRef<HTMLElement>',
              description: 'The target element to observe.',
              required: true,
            },
            {
              name: 'config',
              type: 'Partial<ArdViewportObserverConfig>',
              description: 'Optional configuration to override default settings for the observer.',
              required: false,
            },
          ],
          returnType: 'ArdViewportObserverRef',
        },
        {
          name: 'observeById',
          description: 'Observes an element by its ID and tracks its visibility within the viewport.',
          params: [
            {
              name: 'id',
              type: 'string',
              description: 'The ID of the element to observe.',
              required: true,
            },
            {
              name: 'config',
              type: 'Partial<ArdViewportObserverConfig>',
              description: 'Optional configuration to override default settings for the observer.',
              required: false,
            },
          ],
          returnType: 'ArdViewportObserverRef',
        },
        {
          name: 'observeByQuery',
          description: 'Observes an element using a CSS selector and tracks its visibility within the viewport.',
          params: [
            {
              name: 'query',
              type: 'string',
              description: 'The CSS selector to target the element to observe.',
              required: true,
            },
            {
              name: 'config',
              type: 'Partial<ArdViewportObserverConfig>',
              description: 'Optional configuration to override default settings for the observer.',
              required: false,
            },
          ],
          returnType: 'ArdViewportObserverRef',
        },
        {
          name: 'recheckAll',
          description: 'Rechecks the visibility of all observed elements.',
          params: [],
          returnType: 'void',
        },
      ],
    },
  ],
  enums: [
    {
      name: 'ViewportRelation',
      description: 'Enum describing the relationship of an element to the viewport.',
      definition: `export enum ViewportRelation {
  Above = 'above',
  PartiallyAbove = 'partially-above',
  Inside = 'inside',
  PartiallyBelow = 'partially-below',
  Below = 'below',
  InsideButTooLarge = 'inside-too-large',
  Undefined = 'undefined',
}`,
    },
  ],
  interfaces: [
    {
      name: 'ArdViewportObserverConfig',
      description: 'Configuration interface for the ArdiumViewportObserverService.',
      properties: [
        {
          name: 'margin',
          type: 'number | RequireAtLeastOne<{ top: number; bottom: number }>',
          description: 'Defines the margin values to adjust the viewport observation.',
        },
        {
          name: 'throttleTime',
          type: 'number',
          description: 'Time (in milliseconds) to throttle updates during scrolling or resizing events.',
        },
      ],
    },
    {
      name: 'ArdViewportObserverDefaults',
      description: 'Interface that extends ArdViewportObserverConfig and provides default values.',
      properties: [
        {
          name: 'margin',
          type: "Required<Exclude<ArdViewportObserverConfig['margin'], undefined>>",
          description: 'The default margin settings for the viewport observer.',
        },
        {
          name: 'throttleTime',
          type: 'number',
          description: 'The default throttle time in milliseconds.',
        },
      ],
    },
  ],
  classes: [
    {
      name: 'ArdViewportObserverRef',
      description: 'Reference class representing an observed element in the viewport.',
      properties: [
        {
          name: 'element',
          type: 'HTMLElement',
          description: 'The observed element.',
        },
        {
          name: 'margins',
          type: 'Readonly<{ top: Signal<number>; bottom: Signal<number> }>',
          description: 'The margins (top and bottom) for the observed element.',
        },
        {
          name: 'position',
          type: 'Signal<{ top: number; bottom: number } | undefined>',
          description: 'The position of the element relative to the viewport.',
        },
        {
          name: 'viewportRelation',
          type: 'Signal<ViewportRelation | undefined>',
          description: 'The relationship of the element to the viewport (e.g., inside, above, below).',
        },
        {
          name: 'isInViewport',
          type: 'Signal<boolean | undefined>',
          description: 'Indicates whether the element is in the viewport based on the current relation.',
        },
        {
          name: 'isDestroyed',
          type: 'ReadonlySignal<boolean>',
          description: 'Indicates if the observer reference has been destroyed.',
        },
      ],
      methods: [
        {
          name: 'recheck',
          description: 'Recalculates the position and viewport relation of the observed element.',
          params: [],
          returnType: 'void',
        },
        {
          name: 'destroy',
          description: 'Destroys the observer reference and unsubscribes from all subscriptions.',
          params: [],
          returnType: 'void',
        },
        {
          name: 'setMargin',
          description: 'Sets the margin for the observed element and recalculates the position.',
          overloads: [
            {
              description: 'Sets the top and bottom margins to the same value.',
              params: [
                {
                  name: 'topAndBottom',
                  type: 'number',
                  description: 'Sets the top and bottom margins to the same value.',
                  required: true,
                },
              ],
              returnType: 'void',
            },
            {
              description: 'Sets the top and bottom margins to two different values.',
              params: [
                {
                  name: 'top',
                  type: 'number',
                  description: 'The top margin.',
                  required: false,
                },
                {
                  name: 'bottom',
                  type: 'number',
                  description: 'The bottom margin.',
                  required: false,
                },
              ],
              returnType: 'void',
            },
          ],
        },
      ],
    },
  ],
  constants: [
    {
      name: 'ARD_VIEWPORT_OBSERVER_DEFAULTS',
      type: 'InjectionToken<ArdViewportObserverDefaults>',
      description: 'Injection token for the default configuration of the viewport observer service.',
    },
  ],
  functions: [
    {
      name: 'provideViewportObserverDefaults',
      description:
        'A function to provide custom default configuration for the ArdiumViewportObserverService via dependency injection.',
      params: [
        {
          name: 'config',
          type: 'Partial<ArdViewportObserverDefaults>',
          description: 'A partial configuration object to override the default values for the viewport observer.',
          required: true,
        },
      ],
      returnType: 'Provider',
    },
  ],
};
