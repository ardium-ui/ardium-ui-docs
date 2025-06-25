import { Component } from '@angular/core';
import { counterSignal } from '@ardium-ui/devkit';

@Component({
  selector: 'counter-signal-basic-example',
  templateUrl: './counter-signal-basic-example.html',
  styleUrl: './counter-signal-basic-example.scss',
  standalone: true,
  imports: [],
})
export class CounterSignalBasicExample {
  readonly exampleSignal = counterSignal(10);

  increment() {
    this.exampleSignal.increment();
  }
  decrement() {
    this.exampleSignal.decrement();
  }
  reset() {
    this.exampleSignal.reset();
  }
  double() {
    this.exampleSignal.update(v => v * 2);
  }
}
