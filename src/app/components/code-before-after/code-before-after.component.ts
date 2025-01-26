import { Component, input } from '@angular/core';
import { persistentSignal, PersistentStorageMethod } from '@ardium-ui/devkit';
import { CodeComponent } from '../code/code.component';
import { SupportedLanguage } from '../code/code.types';
import { TwoPaneContainerComponent } from '../internal/two-pane-container/two-pane-container.component';

@Component({
  selector: 'app-code-before-after',
  imports: [TwoPaneContainerComponent, CodeComponent],
  templateUrl: './code-before-after.component.html',
  styleUrl: './code-before-after.component.scss',
})
export class CodeBeforeAfterComponent {
  readonly language = input.required<SupportedLanguage>();

  readonly codeBefore = input<string>('');
  readonly codeAfter = input<string>('');

  readonly scrollSync = persistentSignal(true, {
    method: PersistentStorageMethod.LocalStorage,
    name: 'before-after-scroll-sync',
    serialize: String,
    deserialize: v => v === 'true',
  });

  readonly verticalLayout = persistentSignal(false, {
    method: PersistentStorageMethod.LocalStorage,
    name: 'before-after-vertical-layout',
    serialize: String,
    deserialize: v => v === 'true',
  });
}
