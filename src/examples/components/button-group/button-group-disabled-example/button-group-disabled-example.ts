import { Component } from '@angular/core';
import { ArdiumButtonGroupModule, ArdiumButtonModule } from '@ardium-ui/ui';

@Component({
  selector: 'button-group-disabled-example',
  templateUrl: './button-group-disabled-example.html',
  standalone: true,
  imports: [ArdiumButtonGroupModule, ArdiumButtonModule],
})
export class ButtonGroupDisabledExample {}
