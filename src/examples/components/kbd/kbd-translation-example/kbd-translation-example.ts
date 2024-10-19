import { Component } from '@angular/core';
import { ArdiumKbdModule } from '@ardium-ui/ui';

@Component({
  selector: 'kbd-translation-example',
  templateUrl: 'kbd-translation-example.html',
  standalone: true,
  imports: [ArdiumKbdModule],
})
export class KbdTranslationExample {}
