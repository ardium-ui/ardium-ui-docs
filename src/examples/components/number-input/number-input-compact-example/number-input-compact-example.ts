import { Component } from '@angular/core';
import { ArdiumNumberInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'number-input-compact-example',
  templateUrl: './number-input-compact-example.html',
  styleUrl: './number-input-compact-example.scss',
  standalone: true,
  imports: [ArdiumNumberInputModule],
})
export class NumberInputCompactExample {}
