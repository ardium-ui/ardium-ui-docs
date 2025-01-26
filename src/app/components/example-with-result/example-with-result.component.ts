import { Component, input } from '@angular/core';
import { CodeComponent } from '../code/code.component';
import { SupportedLanguage } from '../code/code.types';
import { TwoPaneContainerComponent } from '../internal/two-pane-container/two-pane-container.component';

@Component({
  selector: 'app-example-with-result',
  imports: [TwoPaneContainerComponent, CodeComponent],
  templateUrl: './example-with-result.component.html',
  styleUrl: './example-with-result.component.scss'
})
export class ExampleWithResultComponent {
  readonly code = input.required<string>();

  readonly codeLanguage = input.required<SupportedLanguage>();
}
