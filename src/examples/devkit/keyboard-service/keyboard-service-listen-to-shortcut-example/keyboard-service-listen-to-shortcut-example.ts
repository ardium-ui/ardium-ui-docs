import { Component, inject, OnInit, signal } from '@angular/core';
import { KeyboardService } from '@ardium-ui/devkit';
import { ArdiumKbdShortcutModule } from '@ardium-ui/ui';

@Component({
  selector: 'keyboard-service-listen-to-shortcut-example',
  templateUrl: './keyboard-service-listen-to-shortcut-example.html',
  styleUrl: './keyboard-service-listen-to-shortcut-example.scss',
  standalone: true,
  imports: [ArdiumKbdShortcutModule],
})
export class KeyboardServiceListenToShortcutExample implements OnInit {
  readonly keyboard = inject(KeyboardService);

  readonly isOpen = signal<boolean>(false);

  ngOnInit(): void {
    this.keyboard.listenToShortcut(['Ctrl', 'F']).subscribe(({ event }) => {
      event.preventDefault();
      this.isOpen.update(v => !v);
    });
    this.keyboard.listenToShortcut(['ShiftRight', 'Q']).subscribe(() => alert('RightShift + Q was pressed!'));
  }
}
