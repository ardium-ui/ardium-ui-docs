import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { persistentSignal, PersistentStorageMethod } from '@ardium-ui/devkit';
import { ArdiumCheckboxModule } from '@ardium-ui/ui';

@Component({
  selector: 'persistent-signal-serialization-example',
  templateUrl: './persistent-signal-serialization-example.html',
  styleUrl: './persistent-signal-serialization-example.scss',
  standalone: true,
  imports: [FormsModule, ArdiumCheckboxModule],
})
export class PersistentSignalSerializationExample {
  readonly acceptsTerms = persistentSignal<boolean>(false, {
    name: 'accepts-terms',
    method: PersistentStorageMethod.LocalStorage,
    serialize: v => String(!!v),
    deserialize: v => v === 'true',
  });

  get termsValue() {
    return localStorage.getItem('accepts-terms') ?? 'null';
  }
}
