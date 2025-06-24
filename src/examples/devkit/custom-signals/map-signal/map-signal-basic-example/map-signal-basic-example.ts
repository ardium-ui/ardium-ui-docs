import { Component } from '@angular/core';
import { mapSignal } from '@ardium-ui/devkit';

@Component({
  selector: 'map-signal-basic-example',
  templateUrl: './map-signal-basic-example.html',
  styleUrl: './map-signal-basic-example.scss',
  standalone: true,
  imports: [],
})
export class MapSignalBasicExample {
  readonly exampleSignal = mapSignal<string, string>([['food1', 'Pizza']]);

  setKey(key: string, value: string) {
    if (!key || !value) return;
    this.exampleSignal.setKey(key, value);
  }
  delete(key: string) {
    if (!key) return;
    this.exampleSignal.delete(key);
  }
  update() {
    this.exampleSignal.update(m => new Map([...m.entries()].map(v => [v[0], v[1].toLowerCase()])));
  }
  clear() {
    this.exampleSignal.clear();
  }
}
