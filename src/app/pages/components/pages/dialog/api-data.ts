import { BOOLEAN_PROPERTY_DATA } from '@utils';
import dedent from 'dedent';
import { ApiPageData } from 'src/app/components/api-page';

export const DialogApiData: ApiPageData = {
  name: 'Dialog',
  modules: [
    {
      name: 'ArdiumDialogModule',
      exports: 'ArdiumDialogComponent',
    },
    {
      name: 'ArdiumModalModule',
      exports: 'ArdiumModalComponent',
    },
  ],
  components: [
    {
      name: 'ArdiumDialogComponent',
      selector: 'ard-dialog',
      exportedFrom: 'ArdiumDialogModule',
      description: 'An extended version of the modal component, featuring reject and confirm buttons.',
      inputs: [
        {
          name: 'variant',
          type: 'PanelVariant',
          description: 'The variant, or shape of the dialog. Can be either rounded or sharp.',
          default: '"rounded"',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'compact',
          description: 'Whether the dialog should have a reduced size of all elements.',
        },
        {
          name: 'heading',
          type: 'string',
          description: 'The heading text of the dialog.',
          default: '""',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'noCloseButton',
          description: 'Whether the close button should be removed from the dialog.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'noBackdrop',
          description: 'Whether the backdrop should be removed from the dialog, making it fully transparent.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'disableBackdropClose',
          description:
            'Whether the user should be able to close the dialog by clicking on the backdrop. Still works if the <code>[noBackdrop]</code> property is set to true.',
        },
        {
          name: 'buttonActionType',
          type: 'ArdDialogActionType',
          description:
            'What kind of action should be automatically performed when clicking on reject and confirm buttons - either close the dialog (<code>"autoclose"</code>) or no action (<code>"no-op"</code>). ',
          default: '"autoclose"',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'allActionsDisabled',
          description:
            'If set to true, all buttons within the dialog will be disabled and the user will be unable to trigger any of them.',
        },
        {
          name: 'confirmButtonText',
          type: 'string',
          description: 'The text of the confirm button.',
          default: '""',
        },
        {
          name: 'confirmButtonColor',
          type: 'ComponentColor',
          description: 'The color of the confirm button.',
          default: '""',
        },
        {
          name: 'confirmButtonAppearance',
          type: 'ButtonAppearance',
          description: 'The appearance of the confirm button.',
          default: '""',
        },
        {
          name: 'rejectButtonText',
          type: 'string',
          description: 'The text of the reject button.',
          default: '""',
        },
        {
          name: 'rejectButtonColor',
          type: 'ComponentColor',
          description: 'The color of the reject button.',
          default: '""',
        },
        {
          name: 'rejectButtonAppearance',
          type: 'ButtonAppearance',
          description: 'The appearance of the reject button.',
          default: '""',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'noRejectButton',
          description: 'Whether the reject button should be removed from the dialog.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'canConfirm',
          description: 'If false, the confirm button is disabled, otherwise it is enabled.',
          default: 'true',
        },
      ],
      twoWayBindings: [
        {
          name: 'open',
          type: 'boolean',
          default: 'false',
          description: 'If set to true, the dialog is open, otherwise it is closed.',
        },
      ],
      outputs: [
        {
          name: 'close',
          type: 'ArdDialogResult',
          description:
            'Emitted when the dialog is closed in any way, and the value emitted corresponds to the way the dialog was closed: either <code>"close"</code> (for close button or backdrop) or <code>"confirm"</code> and <code>"reject"</code> (for confirm and reject buttons respectively).',
        },
        {
          name: 'confirm',
          type: 'void',
          description: 'Emitted when the dialog is closed using the confirm button.',
        },
        {
          name: 'reject',
          type: 'void',
          description: 'Emitted when the dialog is closed using the reject button.',
        },
      ],
      publicMethods: [
        {
          name: 'openProgrammatically',
          description: 'Opens the dialog.',
          returnType: 'void',
          params: [],
        },
        {
          name: 'closeProgrammatically',
          description: 'Closes the dialog.',
          returnType: 'void',
          params: [],
        },
      ],
      templates: [
        {
          name: 'Close button template',
          selector: 'ng-template[ard-close-icon-tmp]',
          description: 'Creates the icon inside the close button.',
          defaultHtmlContent: dedent`
            <ng-template ard-close-icon-tmp>
              <ard-icon>close</ard-icon>
            </ng-template>`,
        },
        {
          name: 'Buttons template',
          selector: 'ng-template[ard-buttons-tmp]',
          description: 'Creates the confirm and reject buttons and handles their state.',
          defaultHtmlContent: dedent`
            <ng-template
              let-confirmButton="confirmButton"
              let-rejectButton="rejectButton"
              let-canConfirm="canConfirm"
              let-allActionsDisabled="allActionsDisabled"
              let-onConfirm="onConfirm"
              let-onReject="onReject"
              let-dialogVariant="dialogVariant"
              let-dialogCompact="dialogCompact"
            >
              <div class="ard-dialog-buttons-container">
                @if (rejectButton.enabled) {
                  <ard-button
                    [color]="rejectButton.color"
                    [appearance]="rejectButton.appearance"
                    [variant]="dialogVariant"
                    [compact]="dialogCompact"
                    [disabled]="allActionsDisabled"
                    (click)="onReject()"
                  >
                    {{ rejectButton.text }}
                  </ard-button>
                }
                <ard-button
                  [color]="confirmButton.color"
                  [appearance]="confirmButton.appearance"
                  [variant]="dialogVariant"
                  [compact]="dialogCompact"
                  [disabled]="!canConfirm || allActionsDisabled"
                  (click)="onConfirm()"
                >
                  {{ confirmButton.text }}
                </ard-button>
              </div>
            </ng-template>`,
          context: [
            {
              name: 'confirmButton',
              type: 'object',
              description:
                'Object containing further context for the confirm button. The contents of this object are described below.',
            },
            {
              name: 'confirmButton.text',
              type: 'string',
              description: 'The text that should be inside the confirm button.',
            },
            {
              name: 'confirmButton.color',
              type: 'ComponentColor',
              description: 'The color of the confirm button.',
            },
            {
              name: 'confirmButton.appearance',
              type: 'ButtonAppearance',
              description: 'The appearance of the confirm button.',
            },
            {
              name: 'rejectButton',
              type: 'object',
              description:
                'Object containing further context for the reject button. The contents of this object are described below.',
            },
            {
              name: 'rejectButton.enabled',
              type: 'boolean',
              description: 'Whether the reject button should be displayed.',
            },
            {
              name: 'rejectButton.text',
              type: 'string',
              description: 'The text that should be inside the reject button.',
            },
            {
              name: 'rejectButton.color',
              type: 'ComponentColor',
              description: 'The color of the reject button.',
            },
            {
              name: 'rejectButton.appearance',
              type: 'ButtonAppearance',
              description: 'The appearance of the reject button.',
            },
            {
              name: 'canConfirm',
              type: 'boolean',
              description: "The value of the dialog's <code>[canConfirm]</code> input.",
            },
            {
              name: 'allActionsDisabled',
              type: 'boolean',
              description: "The value of the dialog's <code>[allActionsDisabled]</code> input.",
            },
            {
              name: 'dialogAppearance',
              type: 'PanelAppearance',
              description: "The value of the dialog's <code>[appearance]</code> input.",
            },
            {
              name: 'dialogVariant',
              type: 'PanelVariant',
              description: "The value of the dialog's <code>[variant]</code> input.",
            },
            {
              name: 'dialogCompact',
              type: 'boolean',
              description: "The value of the dialog's <code>[compact]</code> input.",
            },
            {
              name: 'onConfirm',
              type: '() => void',
              description: 'Function that should be called to trigger a confirmation action.',
            },
            {
              name: 'onReject',
              type: '() => void',
              description: 'Function that should be called to trigger a rejection action.',
            },
          ],
        },
      ],
    },
    {
      name: 'ArdiumModalComponent',
      selector: 'ard-modal',
      exportedFrom: 'ArdiumModalModule',
      description: 'A popup covering the whole screen with a close button.',
      inputs: [
        {
          name: 'variant',
          type: 'PanelVariant',
          description: 'The variant, or shape of the modal. Can be either rounded or sharp.',
          default: '"rounded"',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'compact',
          description: 'Whether the modal should have a reduced size of all elements.',
        },
        {
          name: 'heading',
          type: 'string',
          description: 'The heading text of the modal.',
          default: '""',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'noCloseButton',
          description: 'Whether the close button should be removed from the modal.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'noBackdrop',
          description: 'Whether the backdrop should be removed from the modal, making it fully transparent.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'disableBackdropClose',
          description:
            'Whether the user should be able to close the modal by clicking on the backdrop. Still works if the <code>[noBackdrop]</code> property is set to true.',
        },
        {
          ...BOOLEAN_PROPERTY_DATA,
          name: 'allActionsDisabled',
          description:
            'If set to true, all buttons within the modal will be disabled and the user will be unable to trigger any of them.',
        },
      ],
      twoWayBindings: [
        {
          name: 'open',
          type: 'boolean',
          default: 'false',
          description: 'If set to true, the modal is open, otherwise it is closed.',
        },
      ],
      outputs: [
        {
          name: 'close',
          type: 'void',
          description: 'Emitted when the modal is closed in any way.',
        },
      ],
      publicMethods: [
        {
          name: 'openProgrammatically',
          description: 'Opens the modal.',
          returnType: 'void',
          params: [],
        },
        {
          name: 'closeProgrammatically',
          description: 'Closes the modal.',
          returnType: 'void',
          params: [],
        },
      ],
      templates: [
        {
          name: 'Close button template',
          selector: 'ng-template[ard-close-icon-tmp]',
          description: 'Creates the icon inside the close button.',
          defaultHtmlContent: dedent`
            <ng-template ard-close-icon-tmp>
              <ard-icon>close</ard-icon>
            </ng-template>`,
        },
      ],
    },
  ],
  injectionTokens: [
    {
      name: 'ARD_DIALOG_DEFAULTS',
      type: 'ArdDialogDefaults',
      description: 'Used to provide the default values for all Dialog inputs.',
      allOptional: false,
    },
    {
      name: 'ARD_MODAL_DEFAULTS',
      type: 'ArdModalDefaults',
      description: 'Used to provide the default values for all Modal inputs.',
      allOptional: false,
    },
  ],
  interfaces: [
    {
      name: 'ArdDialogDefaults',
      description: 'Type used for providing default values for the Dialog.',
    },
    {
      name: 'ArdModalDefaults',
      description: 'Type used for providing default values for the Modal.',
    },
    {
      name: 'DialogButtonsContext',
      description: 'Type used to describe all properties of the dialog buttons template.',
    },
  ],
  functions: [
    {
      name: 'provideDialogDefaults',
      description: 'Function used to provide default values for the Dialog, merging them with library defaults.',
      returnType: 'Provider',
      params: [
        {
          name: 'config',
          type: 'Partial<ArdDialogDefaults>',
          description: 'Object containing the new default values for the Dialog.',
        },
      ],
    },
    {
      name: 'provideModalDefaults',
      description: 'Function used to provide default values for the Modal, merging them with library defaults.',
      returnType: 'Provider',
      params: [
        {
          name: 'config',
          type: 'Partial<ArdModalDefaults>',
          description: 'Object containing the new default values for the Modal.',
        },
      ],
    },
  ],
};
