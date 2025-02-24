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

  readonly isCtrlHeld = this.keyboard.ctrlHeld;
  readonly isShiftHeld = this.keyboard.shiftHeld;
  readonly isAltHeld = this.keyboard.altHeld;
  readonly isMetaHeld = this.keyboard.metaHeld;

  readonly capsLockState = this.keyboard.capsLockOn;
  readonly numLockState = this.keyboard.numLockOn;
  readonly scrollLockState = this.keyboard.scrollLockOn;
}
