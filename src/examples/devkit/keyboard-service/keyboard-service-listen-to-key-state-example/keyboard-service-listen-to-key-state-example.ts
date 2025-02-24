import { Component, inject, OnInit, signal } from '@angular/core';
import { KeyboardService } from '@ardium-ui/devkit';
import { ArdiumKbdModule } from '@ardium-ui/ui';

@Component({
  selector: 'keyboard-service-listen-to-key-state-example',
  templateUrl: './keyboard-service-listen-to-key-state-example.html',
  styleUrl: './keyboard-service-listen-to-key-state-example.scss',
  standalone: true,
  imports: [ArdiumKbdModule],
})
export class KeyboardServiceListenToKeyStateExample implements OnInit {
  readonly keyboard = inject(KeyboardService);

  readonly isZeroHeld = signal<boolean>(false);

  ngOnInit(): void {
    this.keyboard.listenToKeyState('0').subscribe(({ isHeld }) => {
      this.isZeroHeld.set(isHeld);
    })
  }
}
