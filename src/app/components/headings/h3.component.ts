import { Component, input } from '@angular/core';

@Component({
  selector: 'app-h3',
  standalone: false,
  template: '<h3 [appAutoId]="htmlId() != null" [forcedId]="htmlId()" [idPrefix]="idPrefix()"><ng-content /></h3>',
})
export class H3Component {
  readonly htmlId = input<string | undefined | null>(null);

  readonly idPrefix = input<string>('');
}
