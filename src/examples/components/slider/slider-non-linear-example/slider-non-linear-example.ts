import { Component, signal } from '@angular/core';
import { ArdiumSliderModule } from '@ardium-ui/ui';

@Component({
  selector: 'slider-non-linear-example',
  templateUrl: './slider-non-linear-example.html',
  styleUrl: './slider-non-linear-example.scss',
  standalone: true,
  imports: [ArdiumSliderModule],
})
export class SliderNonLinearExample {
  readonly value = signal<number>(5);

  formatTooltipFn(value: number) {
    const units = ['KB', 'MB', 'GB', 'TB'];

    let unitIndex = 0;
    let scaledValue = 2 ** value;

    while (scaledValue >= 1024 && unitIndex < units.length - 1) {
      unitIndex += 1;
      scaledValue /= 1024;
    }

    return `${scaledValue} ${units[unitIndex]}`;
  }
}
