import { Component } from '@angular/core';
import { ArdiumDividerModule } from '@ardium-ui/ui';

@Component({
  selector: 'divider-custom-style-example',
  standalone: true,
  imports: [ArdiumDividerModule],
  templateUrl: './divider-custom-style-example.html',
  styleUrl: './divider-custom-style-example.scss',
})
export class DividerCustomStyleExample {}
