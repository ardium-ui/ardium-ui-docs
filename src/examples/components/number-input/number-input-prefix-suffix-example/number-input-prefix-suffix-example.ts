import { Component } from '@angular/core';
import { ArdiumNumberInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'number-input-prefix-suffix-example',
  templateUrl: './number-input-prefix-suffix-example.html',
  styleUrl: './number-input-prefix-suffix-example.scss',
  standalone: true,
  imports: [ArdiumNumberInputModule],
})
export class NumberInputPrefixSuffixExample {}
