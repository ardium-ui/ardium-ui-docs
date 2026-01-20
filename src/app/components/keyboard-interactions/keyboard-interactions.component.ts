import { Component, input } from '@angular/core';
import { coerceArrayProperty } from '@ardium-ui/devkit';
import { ArdiumKbdShortcutModule } from '@ardium-ui/ui';

export interface KeyboardInteractionInternal {
  keys: string[];
  description: string;
}
export interface KeyboardInteraction {
  keys: string[] | string;
  description: string;
}

@Component({
  selector: 'app-keyboard-interactions',
  imports: [ArdiumKbdShortcutModule],
  templateUrl: './keyboard-interactions.component.html',
  styleUrl: './keyboard-interactions.component.scss',
})
export class KeyboardInteractionsComponent {
  readonly interactions = input.required<KeyboardInteractionInternal[], KeyboardInteraction[]>({
    transform: interactions => {
      const newInteractions: KeyboardInteractionInternal[] = [];
      for (const interaction of interactions) {
        const keysArray = Array.isArray(interaction.keys) ? interaction.keys : coerceArrayProperty(interaction.keys);
        newInteractions.push({
          keys: keysArray,
          description: interaction.description,
        });
      }
      return newInteractions;
    },
  });
}
