import { CommonModule } from '@angular/common';
import { Component, ElementRef, input, viewChild } from '@angular/core';
import { persistentSignal, PersistentStorageMethod } from '@ardium-ui/devkit';
import { ArdiumIconButtonModule, ArdiumIconModule } from '@ardium-ui/ui';
import { CodeComponent } from '../code/code.component';
import { SupportedLanguage } from '../code/code.types';
import { CopyButtonComponent } from '../copy-button/copy-button.component';

@Component({
  selector: 'app-code-before-after',
  imports: [CommonModule, CodeComponent, ArdiumIconButtonModule, ArdiumIconModule, CopyButtonComponent],
  templateUrl: './code-before-after.component.html',
  styleUrl: './code-before-after.component.scss',
})
export class CodeBeforeAfterComponent {
  readonly language = input.required<SupportedLanguage>();

  readonly codeBefore = input<string>('');
  readonly codeAfter = input<string>('');

  private readonly containerBefore = viewChild<ElementRef<HTMLElement>>('containerBefore');
  private readonly containerAfter = viewChild<ElementRef<HTMLElement>>('containerAfter');

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

  onContainerBeforeScroll() {
    if (!this.scrollSync()) return;
    const [before, after] = [this.containerBefore(), this.containerAfter()];
    if (!before || !after) return;
    after.nativeElement.scrollTo(before.nativeElement.scrollLeft, 0);
  }

  onContainerAfterScroll() {
    if (!this.scrollSync()) return;
    const [before, after] = [this.containerBefore(), this.containerAfter()];
    if (!before || !after) return;
    before.nativeElement.scrollTo(after.nativeElement.scrollLeft, 0);
  }
}
