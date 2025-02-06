import { AfterViewInit, Component, ElementRef, inject, signal } from '@angular/core';
import { kebab } from 'case';
import { IdLinkComponent } from '../id-link/id-link.component';

@Component({
  selector: '[appAutoId]',
  template: '<div idLink [id]="idText()"><ng-content /></div>',
  imports: [IdLinkComponent],
})
export class AutoIdComponent implements AfterViewInit {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly idText = signal<string>('');

  ngAfterViewInit(): void {
    const el = this.elementRef.nativeElement;
    const content = el.innerText.replace(/tag\x0A/, '');
    if (!content) return;

    this.idText.set(kebab(content));
  }
}
