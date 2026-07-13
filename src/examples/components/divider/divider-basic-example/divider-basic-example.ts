import { Component } from '@angular/core';
import { ArdiumDividerModule } from '@ardium-ui/ui';

@Component({
  selector: 'divider-basic-example',
  standalone: true,
  imports: [ArdiumDividerModule],
  templateUrl: './divider-basic-example.html',
  styleUrl: './divider-basic-example.scss',
})
export class DividerBasicExample {}
