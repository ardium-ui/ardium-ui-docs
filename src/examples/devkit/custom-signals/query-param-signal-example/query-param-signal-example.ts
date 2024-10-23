import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { queryParamSignal } from '@ardium-ui/devkit';

@Component({
  selector: 'query-param-signal-example',
  templateUrl: './query-param-signal-example.html',
  styleUrl: './query-param-signal-example.scss',
  standalone: true,
  imports: [FormsModule],
})
export class QueryParamSignalExample {
  readonly favoriteColor = queryParamSignal<string>('red', 'favorite-color');

  clearSignal() {
    this.favoriteColor.clear();
  }

  get queryParams() {
    return window.location.search;
  }
}
