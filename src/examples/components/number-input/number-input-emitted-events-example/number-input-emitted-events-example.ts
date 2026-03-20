import { Component, signal } from '@angular/core';
import { ArdiumNumberInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'number-input-emitted-events-example',
  templateUrl: './number-input-emitted-events-example.html',
  styleUrl: './number-input-emitted-events-example.scss',
  standalone: true,
  imports: [ArdiumNumberInputModule],
})
export class NumberInputEmittedEventsExample {
  readonly eventLog = signal<[string, any][]>([]);

  addEvent(name: string, event?: any) {
    this.eventLog.update(v => [
      ...v,
      [
        name,
        typeof event === 'string' ? `"${event}"` : typeof event === 'object' ? JSON.stringify(event) : String(event),
      ],
    ]);
  }
}
