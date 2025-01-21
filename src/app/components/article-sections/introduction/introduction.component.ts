import { Component, input } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
  standalone: false,
})
export class IntroductionComponent {
  readonly pageTitle = input.required<string>();
}
