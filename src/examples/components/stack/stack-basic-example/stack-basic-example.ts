import { Component } from '@angular/core';
import { ArdiumStackModule } from '@ardium-ui/ui';

@Component({
  selector: 'stack-basic-example',
  standalone: true,
  imports: [ArdiumStackModule],
  templateUrl: './stack-basic-example.html',
  styleUrl: './stack-basic-example.scss',
})
export class StackBasicExample {}