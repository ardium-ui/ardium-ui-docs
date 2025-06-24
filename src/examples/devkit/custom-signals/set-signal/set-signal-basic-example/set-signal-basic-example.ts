import { Component } from '@angular/core';
import { setSignal } from '@ardium-ui/devkit';

@Component({
  selector: 'set-signal-basic-example',
  templateUrl: './set-signal-basic-example.html',
  styleUrl: './set-signal-basic-example.scss',
  standalone: true,
  imports: [],
})
export class SetSignalBasicExample {
  readonly exampleSignal = setSignal<string>(['Peas', 'Lettuce', 'Corn']);

  add(value: string) {
    if (!value) return;
    this.exampleSignal.add(value);
  }
  delete(value: string) {
    if (!value) return;
    this.exampleSignal.delete(value);
  }
  update() {
    this.exampleSignal.update(m => new Set([...m].map(v => v.toLowerCase())));
  }
  clear() {
    this.exampleSignal.clear();
  }
}
