import { Component, computed, input } from '@angular/core';
import { SupportedLanguage } from './code.types';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [Highlight],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss',
})
export class CodeComponent {
  readonly language = input.required<SupportedLanguage>();

  readonly code = input<string>('');

  readonly classes = computed(() => `lang-${this.language()}`)
}
