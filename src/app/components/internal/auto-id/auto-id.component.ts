import { AfterViewInit, Component, effect, ElementRef, inject, input, signal } from '@angular/core';
import { coerceBooleanProperty } from '@ardium-ui/devkit';
import { kebab } from 'case';
import { IdLinkComponent } from '../id-link/id-link.component';

@Component({
  selector: '[appAutoId]',
  template: '<div idLink [id]="forcedId() ?? idText()"><ng-content /></div>',
  imports: [IdLinkComponent],
})
export class AutoIdComponent implements AfterViewInit {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly autoIdActive = input<boolean, any>(false, { transform: v => coerceBooleanProperty(v), alias: 'appAutoId' });

  readonly forcedId = input<string | undefined | null>(null);
  readonly idPrefix = input<string, string>('', { transform: this._toKebab });

  readonly idText = signal<string>('');

  private _wasViewInit = false;
  ngAfterViewInit(): void {
    this._wasViewInit = true;
    this._setElementId();
  }

  constructor() {
    effect(() => {
      this._setElementId();
    });
  }

  private _toKebab(content: string) {
    return kebab(content.replace(/[\s\.]+/g, ' ').replace(/[^\w\- ]/gi, ''));
  }

  private _setElementId() {
    if (this._wasViewInit) return;

    const el = this.elementRef.nativeElement;
    const content = el.innerText.replace(/tag\x0A/, '');
    if (!content) return;

    this.idText.set(this._toKebab(content));
  }
}
