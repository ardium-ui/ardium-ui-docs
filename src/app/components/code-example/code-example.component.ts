import { Component, input } from '@angular/core';
import { CodeExampleData } from './code-example.types';

@Component({
  selector: 'app-code-example',
  standalone: true,
  imports: [],
  templateUrl: './code-example.component.html',
  styleUrl: './code-example.component.scss',
})
export class CodeExampleComponent {

  readonly data = input.required<CodeExampleData>();
}
