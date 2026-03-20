import { Component, signal } from '@angular/core';
import { ArdiumNumberInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'number-input-basic-example',
  templateUrl: './number-input-basic-example.html',
  styleUrl: './number-input-basic-example.scss',
  standalone: true,
  imports: [ArdiumNumberInputModule],
})
export class NumberInputBasicExample {
  readonly value = signal<number>(10);
}
