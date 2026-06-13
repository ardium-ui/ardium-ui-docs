import { Component } from '@angular/core';
import { ArdiumGridModule } from '@ardium-ui/ui';

@Component({
  selector: 'grid-basic-example',
  standalone: true,
  imports: [ArdiumGridModule],
  templateUrl: './grid-basic-example.html',
  styleUrl: './grid-basic-example.scss',
})
export class GridBasicExample {}