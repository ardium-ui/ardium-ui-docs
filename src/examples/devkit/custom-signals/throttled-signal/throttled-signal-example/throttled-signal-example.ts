import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { throttledSignal } from '@ardium-ui/devkit';

@Component({
  selector: 'throttled-signal-example',
  templateUrl: './throttled-signal-example.html',
  styleUrl: './throttled-signal-example.scss',
  standalone: true,
  imports: [FormsModule],
})
export class ThrottledSignalExample {
  readonly throttledValue = throttledSignal<string>('', 500);
}
