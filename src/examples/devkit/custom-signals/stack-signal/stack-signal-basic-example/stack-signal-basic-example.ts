import { Component } from '@angular/core';
import { stackSignal } from '@ardium-ui/devkit';

@Component({
  selector: 'stack-signal-basic-example',
  templateUrl: './stack-signal-basic-example.html',
  styleUrl: './stack-signal-basic-example.scss',
  standalone: true,
  imports: [],
})
export class StackSignalBasicExample {
  readonly exampleSignal = stackSignal<string>(['Pizza', 'Spaghetti', 'Tomatoes']);

  push(value: string) {
    if (!value) return;
    this.exampleSignal.push(value);
  }
  pop() {
    this.exampleSignal.pop();
  }
  clear() {
    this.exampleSignal.clear();
  }
  update() {
    this.exampleSignal.update(v => v.filter(el => el.length <= 5));
  }
}
