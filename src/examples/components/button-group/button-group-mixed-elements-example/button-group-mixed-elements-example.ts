import { Component } from '@angular/core';
import { ArdiumButtonGroupModule, ArdiumButtonModule, ArdiumIconModule } from '@ardium-ui/ui';

@Component({
  selector: 'button-group-mixed-elements-example',
  templateUrl: './button-group-mixed-elements-example.html',
  standalone: true,
  imports: [ArdiumButtonGroupModule, ArdiumButtonModule, ArdiumIconModule],
})
export class ButtonGroupMixedElementsExample {}
