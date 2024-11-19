import { Component, computed, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-see-also',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './see-also.component.html',
  styleUrl: './see-also.component.scss'
})
export class SeeAlsoComponent {
  readonly link = input.required<string>();

  readonly isExternal = computed(() => this.link().startsWith('http'));
}
