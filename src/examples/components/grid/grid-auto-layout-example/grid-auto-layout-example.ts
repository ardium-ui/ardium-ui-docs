import { Component } from '@angular/core';
import { ArdiumGridModule } from '@ardium-ui/ui';

@Component({
  selector: 'grid-auto-layout-example',
  standalone: true,
  imports: [ArdiumGridModule],
  templateUrl: './grid-auto-layout-example.html',
  styleUrl: './grid-auto-layout-example.scss',
})
export class GridAutoLayoutExample {}