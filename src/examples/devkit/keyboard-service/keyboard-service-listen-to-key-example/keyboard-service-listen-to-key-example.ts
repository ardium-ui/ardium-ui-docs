import { Component, inject, OnInit, signal } from '@angular/core';
import { KeyboardService } from '@ardium-ui/devkit';
import { ArdiumKbdModule } from '@ardium-ui/ui';

const MAX = 400;
const STEP = MAX / 20;

@Component({
  selector: 'keyboard-service-listen-to-key-example',
  templateUrl: './keyboard-service-listen-to-key-example.html',
  styleUrl: './keyboard-service-listen-to-key-example.scss',
  standalone: true,
  imports: [ArdiumKbdModule],
})
export class KeyboardServiceListenToKeyExample implements OnInit {
  readonly keyboard = inject(KeyboardService);

  readonly position = signal<number>(MAX / 2);

  ngOnInit(): void {
    this.keyboard.listenToKey('A').subscribe(() => {
      if (this.position() <= 0) return;
      this.position.update(v => v - STEP);
    });
    this.keyboard.listenToKey('D').subscribe(() => {
      if (this.position() >= MAX) return;
      this.position.update(v => v + STEP);
    });
  }
}
