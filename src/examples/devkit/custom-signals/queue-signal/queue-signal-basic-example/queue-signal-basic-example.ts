import { Component } from '@angular/core';
import { queueSignal } from '@ardium-ui/devkit';

@Component({
  selector: 'queue-signal-basic-example',
  templateUrl: './queue-signal-basic-example.html',
  styleUrl: './queue-signal-basic-example.scss',
  standalone: true,
  imports: [],
})
export class QueueSignalBasicExample {
  readonly exampleSignal = queueSignal<string>(['Pizza', 'Spaghetti', 'Tomatoes']);

  enqueue(value: string) {
    if (!value) return;
    this.exampleSignal.enqueue(value);
  }
  dequeue() {
    this.exampleSignal.dequeue();
  }
  clear() {
    this.exampleSignal.clear();
  }
  update() {
    this.exampleSignal.update(v => v.filter(el => el.length <= 5));
  }
}
