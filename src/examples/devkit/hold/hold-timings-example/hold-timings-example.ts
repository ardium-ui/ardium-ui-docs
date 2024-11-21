import { Component, signal } from '@angular/core';
import { ArdiumHoldModule } from '@ardium-ui/devkit';

@Component({
  selector: 'hold-timings-example',
  templateUrl: './hold-timings-example.html',
  standalone: true,
  imports: [ArdiumHoldModule],
})
export class HoldTimingsExample {
  readonly eventCounter = signal<number>(0);

  onHoldEvent(): void {
    this.eventCounter.update(v => v + 1);
  }
}
