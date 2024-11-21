import { Component, signal } from '@angular/core';
import { ArdiumHoldModule } from '@ardium-ui/devkit';

@Component({
  selector: 'hold-basic-example',
  templateUrl: './hold-basic-example.html',
  standalone: true,
  imports: [ArdiumHoldModule],
})
export class HoldBasicExample {
  readonly eventCounter = signal<number>(0);

  onHoldEvent(): void {
    this.eventCounter.update(v => v + 1);
  }
}
