import { ApiPageData } from 'src/app/components/api-page';

export const KeyboardServiceApiData: ApiPageData = {
  name: 'Keyboard Service',
  services: [
    {
      name: 'KeyboardService',
      providedIn: 'root',
      description:
        'Service for handling keyboard events and shortcuts, tracking modifier key states, and providing observables for key events.',
      methods: [
        {
          name: 'listenToShortcut',
          description:
            'Listens for a specific keyboard shortcut and returns an observable that emits when the shortcut is pressed.',
          params: [
            {
              name: 'toMatch',
              type: 'string[]',
              description: 'An array of keys representing the shortcut. Case-insensitive.',
              required: true,
            },
            {
              name: 'treatAltGraphAsAltPlusCtrl',
              type: 'boolean',
              description: 'Whether to treat AltGraph as Alt + Ctrl.',
              default: 'true',
              required: false,
            },
          ],
          returnType: 'Observable<KeyboardShortcut>',
        },
        {
          name: 'listenToKey',
          description:
            'Listens for a specific key press and returns an observable that emits when the key is pressed. Case-insensitive.',
          params: [
            {
              name: 'code',
              type: 'string',
              description: 'The key code to listen for.',
              required: true,
            },
          ],
          returnType: 'Observable<KeyboardKey>',
        },
        {
          name: 'listenToKeyState',
          description:
            'Listens for a specific key state change and returns an observable that emits when the key state changes. Case-insensitive.',
          params: [
            {
              name: 'code',
              type: 'string',
              description: 'The key code to listen for.',
              required: true,
            },
          ],
          returnType: 'Observable<KeyboardKeyState>',
        },
      ],
      properties: [
        {
          name: 'isLeftCtrlHeld',
          type: 'Signal<boolean>',
          description: 'Indicates if the left Ctrl key is currently held down.',
        },
        {
          name: 'isRightCtrlHeld',
          type: 'Signal<boolean>',
          description: 'Indicates if the right Ctrl key is currently held down.',
        },
        {
          name: 'isCtrlHeld',
          type: 'Signal<boolean>',
          description: 'Indicates if either the left or right Ctrl key is held down.',
        },
        {
          name: 'isLeftAltHeld',
          type: 'Signal<boolean>',
          description: 'Indicates if the left Alt key is held down.',
        },
        {
          name: 'isRightAltHeld',
          type: 'Signal<boolean>',
          description: 'Indicates if the right Alt (AltGr) key is held down.',
        },
        {
          name: 'isShiftHeld',
          type: 'Signal<boolean>',
          description: 'Indicates if either the left or right Shift key is held down.',
        },
        {
          name: 'isLeftShiftHeld',
          type: 'Signal<boolean>',
          description: 'Indicates if the left Shift key is held down.',
        },
        {
          name: 'isRightShiftHeld',
          type: 'Signal<boolean>',
          description: 'Indicates if the right Shift key is held down.',
        },
        {
          name: 'isLeftMetaHeld',
          type: 'Signal<boolean>',
          description: 'Indicates if the left Meta (Windows/Command) key is held down.',
        },
        {
          name: 'isRightMetaHeld',
          type: 'Signal<boolean>',
          description: 'Indicates if the right Meta (Windows/Command) key is held down.',
        },
        {
          name: 'isMetaHeld',
          type: 'Signal<boolean>',
          description: 'Indicates if either the left or right Meta (Windows/Command) key is held down.',
        },
        {
          name: 'capsLockState',
          type: 'Signal<boolean | undefined>',
          description: 'Indicates whether Caps Lock is enabled.',
        },
        {
          name: 'numLockState',
          type: 'Signal<boolean | undefined>',
          description: 'Indicates whether Num Lock is enabled.',
        },
        {
          name: 'scrollLockState',
          type: 'Signal<boolean | undefined>',
          description: 'Indicates whether Scroll Lock is enabled.',
        },
        {
          name: 'anyShortcut$',
          type: 'Observable<KeyboardShortcut>',
          description: 'Observable that emits when any registered shortcut is triggered.',
        },
        {
          name: 'anyKeyPress$',
          type: 'Observable<KeyboardKey>',
          description: 'Observable that emits when any key is pressed.',
        },
        {
          name: 'anyKeyState$',
          type: 'Observable<KeyboardKeyState>',
          description: 'Observable that emits when any key state changes.',
        },
      ],
    },
  ],
  types: [
    {
      name: 'KeyboardShortcut',
      definition: `export type KeyboardShortcut = {
  keys: string[];
  event: KeyboardEvent;
};`,
      description: 'Represents a keyboard shortcut event, containing the keys involved and the event object.',
    },
    {
      name: 'KeyboardKey',
      definition: `export type KeyboardKey = {
  key: string;
  event: KeyboardEvent;
};`,
      description: 'Represents a key press event, containing the key pressed and the event object.',
    },
    {
      name: 'KeyboardKeyState',
      definition: `export type KeyboardKeyState = {
  key: string;
  isHeld: boolean;
  event: KeyboardEvent;
};`,
      description: 'Represents a key state event, indicating whether the key is held down and the event object.',
    },
  ],
};
