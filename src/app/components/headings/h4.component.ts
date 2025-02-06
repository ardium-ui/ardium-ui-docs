import { Component, input } from '@angular/core';

@Component({
  selector: 'app-h4',
  standalone: false,
  template: '<h4 [appAutoId]="htmlId() != null" [forcedId]="htmlId()" [idPrefix]="idPrefix()"]><ng-content /></h4>',
})
export class H4Component {
  readonly htmlId = input<string | undefined | null>(null);

  readonly idPrefix = input<string>('');
}
