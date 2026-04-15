import { Component } from '@angular/core';
import { ArdiumButtonModule, ArdiumIconButtonModule, ArdiumIconModule } from '@ardium-ui/ui';

@Component({
  selector: 'icon-button-disabled-example',
  templateUrl: './icon-button-disabled-example.html',
  styleUrl: './icon-button-disabled-example.scss',
  standalone: true,
  imports: [ArdiumButtonModule, ArdiumIconButtonModule, ArdiumIconModule],
})
export class IconButtonDisabledExample {
  onClick() {
    console.log('Button clicked!');
  }
}
