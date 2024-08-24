import { Component } from '@angular/core';
import { ArdiumKbdModule } from '@ardium-ui/ui';

@Component({
  selector: 'kbd-full-example',
  templateUrl: 'kbd-full-example.html',
  standalone: true,
  imports: [ArdiumKbdModule],
})
export class KbdFullExample {}
