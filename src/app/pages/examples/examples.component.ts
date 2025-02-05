import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'examples-page',
  standalone: true,
  imports: [RouterOutlet],
  providers: [],
  templateUrl: './examples.component.html',
})
export class ExamplesPage {}
