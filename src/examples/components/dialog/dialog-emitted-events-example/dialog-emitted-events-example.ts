import { Component, signal } from '@angular/core';
import { ArdiumDialogModule } from '@ardium-ui/ui';

@Component({
  selector: 'dialog-emitted-events-example',
  templateUrl: './dialog-emitted-events-example.html',
  styleUrl: './dialog-emitted-events-example.scss',
  standalone: true,
  imports: [ArdiumDialogModule],
})
export class DialogEmittedEventsExample {
  readonly dialogOpen = signal<boolean>(false);

  readonly dialogEventLog = signal<[string, any][]>([]);

  addEvent(name: string, event?: any) {
    this.dialogEventLog.update(v => [...v, [name, typeof event === 'string' ? `"${event}"` : String(event)]]);
  }
}
