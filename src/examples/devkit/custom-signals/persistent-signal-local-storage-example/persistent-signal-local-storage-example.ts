import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { persistentSignal, PersistentStorageMethod } from '@ardium-ui/devkit';

@Component({
  selector: 'persistent-signal-local-storage-example',
  templateUrl: './persistent-signal-local-storage-example.html',
  styleUrl: './persistent-signal-local-storage-example.scss',
  standalone: true,
  imports: [FormsModule],
})
export class PersistentSignalLocalStorageExample {
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
