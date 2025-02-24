import { Component, input } from '@angular/core';

@Component({
  selector: 'app-h6',
  standalone: false,
  template: '<h6 [appAutoId]="htmlId() != null" [forcedId]="htmlId()" [idPrefix]="idPrefix()"><ng-content /></h6>',
})
export class H6Component {
  readonly htmlId = input<string | undefined | null>(null);

  readonly idPrefix = input<string>('');
}
