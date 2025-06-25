import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tupleSignal } from '@ardium-ui/devkit';

@Component({
  selector: 'tuple-signal-basic-example',
  templateUrl: './tuple-signal-basic-example.html',
  styleUrl: './tuple-signal-basic-example.scss',
  standalone: true,
  imports: [FormsModule],
})
export class TupleSignalBasicExample {
  readonly exampleSignal = tupleSignal<[string, number, boolean]>(['Peas', 5, true]);
}
