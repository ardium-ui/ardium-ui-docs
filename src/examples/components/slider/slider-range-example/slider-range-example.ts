import { Component, signal } from '@angular/core';
import { ArdiumRangeSliderModule, SliderRange } from '@ardium-ui/ui';

@Component({
  selector: 'slider-range-example',
  templateUrl: './slider-range-example.html',
  styleUrl: './slider-range-example.scss',
  standalone: true,
  imports: [ArdiumRangeSliderModule],
})
export class SliderRangeExample {
  readonly value = signal<SliderRange>({ from: 30, to: 80 });
}
