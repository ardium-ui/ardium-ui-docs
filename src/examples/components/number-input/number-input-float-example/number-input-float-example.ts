import { Component } from '@angular/core';
import { ArdiumNumberInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'number-input-float-example',
  templateUrl: './number-input-float-example.html',
  styleUrl: './number-input-float-example.scss',
  standalone: true,
  imports: [ArdiumNumberInputModule],
})
export class NumberInputFloatExample {}
