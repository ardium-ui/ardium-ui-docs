import { Component } from '@angular/core';
import { ArdiumGridModule } from '@ardium-ui/ui';

@Component({
  selector: 'grid-columns-example',
  standalone: true,
  imports: [ArdiumGridModule],
  templateUrl: './grid-columns-example.html',
  styleUrl: './grid-columns-example.scss',
})
export class GridColumnsExample {}