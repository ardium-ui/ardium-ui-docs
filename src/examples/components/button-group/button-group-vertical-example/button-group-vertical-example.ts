import { Component } from '@angular/core';
import { ArdiumButtonGroupModule, ArdiumButtonModule, ArdiumIconModule } from '@ardium-ui/ui';

@Component({
  selector: 'button-group-vertical-example',
  templateUrl: './button-group-vertical-example.html',
  standalone: true,
  imports: [ArdiumButtonGroupModule, ArdiumButtonModule, ArdiumIconModule],
})
export class ButtonGroupVerticalExample {}
