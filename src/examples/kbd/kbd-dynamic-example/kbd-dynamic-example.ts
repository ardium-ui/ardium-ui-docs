import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
import { ArdiumKbdModule } from '@ardium-ui/ui';

@Component({
  selector: 'kbd-dynamic-example',
  templateUrl: 'kbd-dynamic-example.html',
  standalone: true,
  imports: [ArdiumKbdModule],
})
export class KbdDynamicExample implements OnInit, OnDestroy {
  readonly keys: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  private readonly _currentKeyIndex = signal<number>(0);

  public readonly currentKey = computed(() => this.keys[this._currentKeyIndex()]);
  
  private _interval: any;
  ngOnInit(): void {
    this._interval = setInterval(() => {
      if (this._currentKeyIndex() === this.keys.length - 1) this._currentKeyIndex.set(0);
      else this._currentKeyIndex.update(v => v + 1);
    }, 1000);
  }
  ngOnDestroy(): void {
    if (!this._interval) return;

    clearInterval(this._interval);
  }
}
