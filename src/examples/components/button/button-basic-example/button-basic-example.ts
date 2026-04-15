import { Component } from '@angular/core';
import { ArdiumButtonModule, ArdiumIconModule } from '@ardium-ui/ui';

@Component({
  selector: 'button-basic-example',
  templateUrl: './button-basic-example.html',
  styleUrl: './button-basic-example.scss',
  standalone: true,
  imports: [ArdiumButtonModule, ArdiumIconModule],
})
export class ButtonBasicExample {}
