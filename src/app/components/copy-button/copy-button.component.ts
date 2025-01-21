import { Component, input } from '@angular/core';
import { ArdiumIconButtonModule, ArdiumIconModule } from '@ardium-ui/ui';

@Component({
  selector: 'app-copy-button',
  imports: [ArdiumIconButtonModule, ArdiumIconModule],
  template: `<ard-icon-button class="copy-button" (click)="executeCopy()">
    <ard-icon>content-copy</ard-icon>
  </ard-icon-button>`,
  styleUrl: './copy-button.component.scss',
})
export class CopyButtonComponent {
  readonly contentToCopy = input.required<string>();

  executeCopy() {
    navigator.clipboard.writeText(this.contentToCopy());
  }
}
