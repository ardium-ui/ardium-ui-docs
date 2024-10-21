import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { persistentSignal, PersistentStorageMethod } from '@ardium-ui/devkit';

@Component({
  selector: 'persistent-signal-example',
  templateUrl: './persistent-signal-example.html',
  styleUrl: './persistent-signal-example.scss',
  standalone: true,
  imports: [FormsModule],
})
export class PersistentSignalExample {
  readonly favoriteFood = persistentSignal('spaghetti', {
    name: 'favorite-food',
    method: PersistentStorageMethod.LocalStorage,
  });

  clearSignal() {
    this.favoriteFood.clear();
  }

  get localStorageValue() {
    return localStorage.getItem('favorite-food');
  }
}
