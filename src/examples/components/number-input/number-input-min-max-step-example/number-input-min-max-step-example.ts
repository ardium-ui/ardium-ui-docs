import { Component } from '@angular/core';
import { ArdiumNumberInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'number-input-min-max-step-example',
  templateUrl: './number-input-min-max-step-example.html',
  styleUrl: './number-input-min-max-step-example.scss',
  standalone: true,
  imports: [ArdiumNumberInputModule],
})
export class NumberInputMinMaxStepExample {}
