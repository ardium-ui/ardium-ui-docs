import { Component, input } from '@angular/core';
import { EXCEPTION_SEVERITY_MAP, ExceptionSeverity } from './exception-severity.types';

@Component({
  selector: 'app-exception-severity',
  standalone: true,
  imports: [],
  templateUrl: './exception-severity.component.html',
  styleUrl: './exception-severity.component.scss',
  host: {
    '[class]': "'severity-' + severity().toLowerCase().replace(' ', '-')",
  },
})
export class ExceptionSeverityComponent {
  readonly severity = input.required<string, string>({
    alias: 'code',
    transform: v => {
      const severity = v.slice(4, 6) as ExceptionSeverity;
      return EXCEPTION_SEVERITY_MAP[severity];
    },
  });
}
