import { Component } from '@angular/core';
import { ArdiumDividerModule } from '@ardium-ui/ui';

@Component({
  selector: 'divider-directive-content-example',
  standalone: true,
  imports: [ArdiumDividerModule],
  templateUrl: './divider-directive-content-example.html',
  styleUrl: './divider-directive-content-example.scss',
})
export class DividerDirectiveContentExample {}
