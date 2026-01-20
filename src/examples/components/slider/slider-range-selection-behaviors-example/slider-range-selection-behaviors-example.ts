import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArdiumRadioModule, ArdiumRangeSliderModule, ArdRangeSelectionBehavior, SliderRange } from '@ardium-ui/ui';

@Component({
  selector: 'slider-range-selection-behaviors-example',
  templateUrl: './slider-range-selection-behaviors-example.html',
  styleUrl: './slider-range-selection-behaviors-example.scss',
  standalone: true,
  imports: [ArdiumRangeSliderModule, ArdiumRadioModule, FormsModule],
})
export class SliderRangeSelectionBehaviorsExample {
  readonly value = signal<SliderRange>({ from: 30, to: 80 });
  
  readonly selectionBehavior = signal<ArdRangeSelectionBehavior>(ArdRangeSelectionBehavior.Allow);

  readonly allowEqualValues = signal<boolean>(false);
}
