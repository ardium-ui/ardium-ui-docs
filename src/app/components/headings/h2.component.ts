import { Component, input } from '@angular/core';

@Component({
  selector: 'app-h2',
  standalone: false,
  template: '<h2 [appAutoId]="htmlId() != null" [forcedId]="htmlId()" [idPrefix]="idPrefix()"><ng-content /></h2>',
})
export class H2Component {
  readonly htmlId = input<string | undefined | null>(null);

  readonly idPrefix = input<string>('');
}
