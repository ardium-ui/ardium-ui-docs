import { Component } from '@angular/core';
import { arraySignal } from '@ardium-ui/devkit';

@Component({
  selector: 'array-signal-basic-example',
  templateUrl: './array-signal-basic-example.html',
  styleUrl: './array-signal-basic-example.scss',
  standalone: true,
  imports: [],
})
export class ArraySignalBasicExample {
  readonly exampleSignal = arraySignal<string>(['Pizza', 'Cheese', 'Spaghetti']);

  push(value: string) {
    if (!value) return;
    this.exampleSignal.push(value);
  }
  pop() {
    this.exampleSignal.pop();
  }
  map() {
    this.exampleSignal.map(v => v.toUpperCase());
  }
  filter() {
    this.exampleSignal.filter(v => v.length > 6);
  }
  reverse() {
    this.exampleSignal.reverse();
  }
}
