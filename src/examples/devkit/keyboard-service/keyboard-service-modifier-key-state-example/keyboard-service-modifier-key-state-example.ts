import { Component, inject } from '@angular/core';
import { KeyboardService } from '@ardium-ui/devkit';
import { ArdiumKbdModule } from '@ardium-ui/ui';

@Component({
  selector: 'keyboard-service-modifier-key-state-example',
  templateUrl: './keyboard-service-modifier-key-state-example.html',
  styleUrl: './keyboard-service-modifier-key-state-example.scss',
  standalone: true,
  imports: [ArdiumKbdModule],
})
export class KeyboardServiceModifierKeyStateExample {
  readonly keyboard = inject(KeyboardService);

  getModifierKeyText(value: boolean): string {
    return value ? 'pressed' : 'idle';
  }
  getModifierKeyClass(value: boolean): string {
    return value ? 'down' : 'up';
  }
  getLockKeyText(value: boolean | undefined): string {
    return value === undefined ? 'unknown' : value ? 'active' : 'inactive';
  }
  getLockKeyClass(value: boolean | undefined): string {
    return value === undefined ? 'unknown' : value ? 'down' : 'up';
  }
}
