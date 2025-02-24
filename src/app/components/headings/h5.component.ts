import { Component, input } from '@angular/core';

@Component({
  selector: 'app-h5',
  standalone: false,
  template: '<h5 [appAutoId]="htmlId() != null" [forcedId]="htmlId()" [idPrefix]="idPrefix()"><ng-content /></h5>',
})
export class H5Component {
  readonly htmlId = input<string | undefined | null>(null);

  readonly idPrefix = input<string>('');
}
