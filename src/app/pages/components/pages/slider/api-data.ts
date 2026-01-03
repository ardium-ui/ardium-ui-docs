import { ApiPageData } from 'src/app/components/api-page';

export const sliderApiData: ApiPageData = {
  name: 'Slider',
  modules: [
    {
      name: 'ArdiumSliderModule',
      exports: ['ArdiumSliderComponent', 'ArdiumTabComponent'],
    },
  ],
  components: [
    {
      name: 'ArdiumSliderComponent',
      selector: 'ard-slider',
      exportedFrom: 'ArdiumSliderModule',
      // description: 'Wrapper for all slider components.',
      // inputs: [
      //   {
      //     name: 'initialTab',
      //     type: 'string',
      //     description: 'The id of the tab that should be selected initially.',
      //     default: 'undefined',
      //   },
      //   {
      //     name: 'color',
      //     type: 'ComponentColor',
      //     description: 'The color of the tabber.',
      //     default: ComponentColor.Primary,
      //   },
      //   {
      //     name: 'stretchTabs',
      //     type: 'BooleanLike',
      //     description: 'Whether the tabs should stretch to fill the width of the tabber.',
      //     default: 'false',
      //   },
      //   {
      //     name: 'uniformTabWidths',
      //     type: 'BooleanLike',
      //     description: 'Whether the tabs should have uniform widths, adjusting to the widest tab.',
      //     default: 'false',
      //   },
      //   {
      //     name: 'tabAlignment',
      //     type: 'OneAxisAlignment',
      //     description: 'Alignment of the tabs within the tabber.',
      //     default: OneAxisAlignment.Left,
      //   },
      //   {
      //     name: 'tabIndex',
      //     type: 'number',
      //     description: 'The tab index of the tabber element.',
      //     default: '0',
      //   },
      // ],
      // outputs: [
      //   {
      //     name: 'focus',
      //     type: 'string',
      //     description: 'Emits the id of the tab when it receives focus.',
      //   },
      //   {
      //     name: 'blur',
      //     type: 'string',
      //     description: 'Emits the id of the tab when it loses focus.',
      //   },
      // ],
      // twoWayBindings: [
      //   {
      //     name: 'selectedTabId',
      //     type: 'string',
      //     description: 'The id of the currently selected tab. By default, the first tab is selected.',
      //   },
      // ],
      // contentChildren: [
      //   {
      //     selector: 'ArdiumTabComponent',
      //     description: 'Tabs to be displayed within the tabber.',
      //   },
      // ],
      // templates: [
      //   {
      //     name: 'Label template',
      //     selector: 'ng-template[ard-tabber-label-tmp]',
      //     description: 'Defines the structure of the tab label.',
      //     context: [
      //       {
      //         name: '$implicit',
      //         type: 'string',
      //         description: 'The label text of the tab. (Same as label)',
      //       },
      //       {
      //         name: 'label',
      //         type: 'string',
      //         description: 'The label text of the tab. (Same as $implicit)',
      //       },
      //       {
      //         name: 'tabId',
      //         type: 'string',
      //         description: 'The id of the tab.',
      //       }
      //     ],
      //     defaultHtmlContent: dedent`
      //     <ng-template ard-tabber-label-tmp let-label>
      //       {{ label }}
      //     </ng-template>`,
      //   },
      // ],
    },
  ],
  //   {
  //     name: 'ArdiumTabComponent',
  //     selector: 'ard-tab',
  //     exportedFrom: 'ArdiumTabberModule',
  //     description: 'Individual tab component to be used within a tabber.',
  //     inputs: [
  //       {
  //         name: 'tabId',
  //         type: 'string',
  //         description: 'Unique identifier for the tab.',
  //         required: true,
  //       },
  //       {
  //         name: 'label',
  //         type: 'string | TemplateRef<any> | null',
  //         description:
  //           'The text label of the tab, or a template for custom content. Defaults to <code>null</code>, which falls back to tabId.',
  //       },
  //       {
  //         name: 'disabled',
  //         type: 'BooleanLike',
  //         description: 'Whether the tab is disabled.',
  //         default: 'false',
  //       },
  //       {
  //         name: 'selected',
  //         type: 'BooleanLike',
  //         description: 'Whether the tab is selected.',
  //       },
  //     ],
  //     outputs: [
  //       {
  //         name: 'focus',
  //         type: 'void',
  //         description: 'Emits when the tab receives focus.',
  //       },
  //       {
  //         name: 'blur',
  //         type: 'void',
  //         description: 'Emits when the tab loses focus.',
  //       },
  //       {
  //         name: 'selectedChange',
  //         type: 'boolean',
  //         description: 'Emits when the selected state of the tab changes.',
  //       },
  //     ],
  //     publicMethods: [
  //       {
  //         name: 'setSelected',
  //         description: 'Sets the selected state of the tab.',
  //         returnType: 'void',
  //         params: [
  //           {
  //             name: 'state',
  //             type: 'boolean',
  //             description: 'The new selected state.',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ],
  // injectionTokens: [
  //   {
  //     name: 'ARD_TABBER_DEFAULTS',
  //     type: 'ArdTabberDefaults',
  //     description:
  //       'Used to provide the default values for all Tabber inputs, as well as the <code>[disabled]</code> input of the tab component.',
  //     allOptional: false,
  //   },
  // ],
  // interfaces: [
  //   {
  //     name: 'ArdTabberDefaults',
  //     description: 'Type used for providing default values for the Tabber and Tab components.',
  //   },
  // ],
  // functions: [
  //   {
  //     name: 'provideTabberDefaults',
  //     description: 'Function used to provide default values for the Tabber, merging them with library defaults.',
  //     returnType: 'Provider',
  //     params: [
  //       {
  //         name: 'config',
  //         type: 'Partial<ArdTabberDefaults>',
  //         description: 'Object containing the new default values for the Tabber.',
  //       },
  //     ],
  //   },
};
