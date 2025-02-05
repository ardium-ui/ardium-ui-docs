import { ApiPageData } from 'src/app/components/api-page';

export const InfiniteScrollApiData: ApiPageData = {
  name: 'Infinite Scroll',
  modules: [
    {
      name: 'ArdiumInfiniteScrollModule',
      description: 'Module that declares and exports the ArdiumInfiniteScrollDirective.',
      exports: ['ArdiumInfiniteScrollDirective'],
    },
  ],
  directives: [
    {
      exportedFrom: './infinite-scroll.directive',
      name: 'ArdiumInfiniteScrollDirective',
      description:
        'Directive implementing infinite scroll behavior for the specified target. Emits an event when the scroll position reaches a configurable threshold.',
      selector: '[ardInfScroll]',
      inputs: [
        {
          name: 'ardInfScrollThreshold',
          type: 'number',
          description:
            'The distance in pixels from the bottom of the scrollable area at which the infinite scroll event is triggered. The value is coerced to a number.',
          default: '200',
          required: false,
        },
        {
          name: 'ardInfScrollActive',
          type: 'boolean',
          description:
            'Determines whether the infinite scroll functionality is active. When false, scroll events are ignored until reactivated.',
          default: 'true',
          required: false,
        },
        {
          name: 'ardInfScrollTarget',
          type: '"host" | "html"',
          description:
            'Specifies the element to observe for scroll events. A value of "host" observes the host element, while "html" observes the window object.',
          default: '"html"',
          required: false,
        },
      ],
      outputs: [
        {
          name: 'ardInfScrollReachThreshold',
          type: 'void',
          description:
            'Emitted when the scroll position reaches the defined threshold, indicating that additional content may be loaded.',
        },
      ],
    },
  ],
  enums: [
    {
      name: 'ArdInfScrollTarget',
      description:
        'Enum for selecting the scroll event target, where "host" refers to the host element and "html" to the window object.',
      definition: `export const ArdInfScrollTarget = {
  Host: 'host',
  HTML: 'html',
} as const;
export type ArdInfScrollTarget = typeof ArdInfScrollTarget[keyof typeof ArdInfScrollTarget];`,
    },
  ],
  interfaces: [
    {
      name: 'ArdInfiniteScrollDefaults',
      description: 'Interface defining default configuration options for the infinite scroll directive.',
      properties: [
        {
          name: 'threshold',
          type: 'number',
          description: 'The default value for <code>ardInfScrollThreshold</code> input.',
        },
        {
          name: 'target',
          type: 'ArdInfScrollTarget',
          description: 'The default value for <code>ardInfScrollThreshold</code> input.'
        },
      ],
    },
  ],
  injectionTokens: [
    {
      name: 'ARD_INFINITE_SCROLL_DEFAULTS',
      type: 'InjectionToken<ArdInfiniteScrollDefaults>',
      description: 'Injection token providing default configuration values for the infinite scroll directive.',
    },
  ],
};
