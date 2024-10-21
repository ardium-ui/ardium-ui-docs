import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { persistentSignal, PersistentStorageMethod } from '@ardium-ui/devkit';

@Component({
  selector: 'persistent-signal-cookies-example',
  templateUrl: './persistent-signal-cookies-example.html',
  styleUrl: './persistent-signal-cookies-example.scss',
  standalone: true,
  imports: [FormsModule],
})
export class PersistentSignalCookiesExample {
  readonly favoriteFood = persistentSignal('chocolate chip cookies', {
    name: 'favorite-food',
    method: PersistentStorageMethod.Cookies,
    maxAge: 60 * 60 * 24 * 7,
  });

  clearSignal() {
    this.favoriteFood.clear();
  }

  get cookieValue() {
    let match = document.cookie.match(new RegExp('(^| )' + 'favorite-food' + '=([^;]+)'));
    if (match) return match[2];
    return null;
  }
}
