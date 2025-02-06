import { Component, input } from '@angular/core';

@Component({
  selector: 'app-h1',
  standalone: false,
  template: '<h1 [appAutoId]="htmlId() != null" [forcedId]="htmlId()" [idPrefix]="idPrefix()"]><ng-content /></h1>',
})
export class H1Component {
  readonly htmlId = input<string | undefined | null>(null);

  readonly idPrefix = input<string>('');
}
