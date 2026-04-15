import { Component } from '@angular/core';
import { ArdiumIconButtonModule, ArdiumIconModule } from '@ardium-ui/ui';

@Component({
  selector: 'icon-button-compact-example',
  templateUrl: './icon-button-compact-example.html',
  styleUrl: './icon-button-compact-example.scss',
  standalone: true,
  imports: [ArdiumIconButtonModule, ArdiumIconModule],
})
export class IconButtonCompactExample {}
