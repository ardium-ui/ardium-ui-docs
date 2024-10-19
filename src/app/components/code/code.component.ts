import { Component, computed, input } from '@angular/core';
import { coerceBooleanProperty } from '@ardium-ui/devkit';
import { Highlight } from 'ngx-highlightjs';
import { SupportedLanguage } from './code.types';

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

  readonly styled = input<boolean, any>(false, { transform: v => coerceBooleanProperty(v) });

  readonly langClass = computed(() => `lang-${this.language()}`)
}
