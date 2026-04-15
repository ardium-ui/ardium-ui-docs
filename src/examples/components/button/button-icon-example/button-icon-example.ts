import { Component } from '@angular/core';
import { ArdiumButtonModule, ArdiumIconModule } from '@ardium-ui/ui';

@Component({
  selector: 'button-icon-example',
  templateUrl: './button-icon-example.html',
  styleUrl: './button-icon-example.scss',
  standalone: true,
  imports: [ArdiumButtonModule, ArdiumIconModule],
})
export class ButtonIconExample {
  
}
