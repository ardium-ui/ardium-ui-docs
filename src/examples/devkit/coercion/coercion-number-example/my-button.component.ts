import { Component, input } from '@angular/core';
import { coerceNumberProperty } from '@ardium-ui/devkit';

@Component({
  selector: 'my-button',
  template: `<button (click)="alert()"><ng-content /></button>`,
  standalone: true,
  imports: [],
})
export class MyButtonComponent {
  readonly delay = input<number, any>(0, { transform: v => coerceNumberProperty(v, 0) });

  alert() {
    setTimeout(() => {
      alert('Hello world!');
    }, this.delay());
  }
}
