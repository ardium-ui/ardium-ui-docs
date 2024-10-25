import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debouncedSignal } from '@ardium-ui/devkit';

@Component({
  selector: 'debounced-signal-example',
  templateUrl: './debounced-signal-example.html',
  styleUrl: './debounced-signal-example.scss',
  standalone: true,
  imports: [FormsModule],
})
export class DebouncedSignalExample {
  readonly debouncedValue = debouncedSignal<string>('', 500);
}
