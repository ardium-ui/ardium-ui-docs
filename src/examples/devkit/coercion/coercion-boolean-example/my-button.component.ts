import { Component, input } from "@angular/core";
import { coerceBooleanProperty } from "@ardium-ui/devkit";

@Component({
  selector: 'my-button',
  template: '<button [disabled]="disabled()"><ng-content /></button>',
  standalone: true,
  imports: [],
})
export class MyButtonComponent {
  readonly disabled = input<boolean, any>(false, { transform: coerceBooleanProperty });
}