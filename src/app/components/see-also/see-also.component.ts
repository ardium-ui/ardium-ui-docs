import { Component, input } from '@angular/core';

@Component({
  selector: 'app-see-also',
  standalone: true,
  imports: [],
  templateUrl: './see-also.component.html',
  styleUrl: './see-also.component.scss',
})
export class SeeAlsoComponent {
  readonly link = input.required<string>();
}
