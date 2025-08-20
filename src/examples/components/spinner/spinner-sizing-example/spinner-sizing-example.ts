import { Component, signal } from '@angular/core';
import { ArdiumSpinnerModule } from '@ardium-ui/ui';

@Component({
  selector: 'spinner-sizing-example',
  templateUrl: './spinner-sizing-example.html',
  styleUrl: './spinner-sizing-example.scss',
  standalone: true,
  imports: [ArdiumSpinnerModule],
})
export class SpinnerSizingExample {
  readonly spinnerSize = signal<string>('4rem');
}
