import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { queryParamSignal } from '@ardium-ui/devkit';
import { ArdiumCheckboxModule } from '@ardium-ui/ui';

@Component({
  selector: 'query-param-signal-serialization-example',
  templateUrl: './query-param-signal-serialization-example.html',
  styleUrl: './query-param-signal-serialization-example.scss',
  standalone: true,
  imports: [FormsModule, ArdiumCheckboxModule],
})
export class QueryParamSignalSerializationExample {
  readonly acceptsTerms = queryParamSignal<boolean>(false, {
    paramName: 'accepts-terms',
    serialize: v => (v === null ? null : String(v)),
    deserialize: v => v === 'true',
  });

  get queryParams() {
    return window.location.search;
  }
}
