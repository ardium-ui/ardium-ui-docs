import { Component } from '@angular/core';
import { ArdiumButtonModule } from '@ardium-ui/ui';

@Component({
  selector: 'button-basic-example',
  templateUrl: './button-basic-example.html',
  styleUrl: './button-basic-example.scss',
  standalone: true,
  imports: [ArdiumButtonModule],
})
export class ButtonBasicExample {}
