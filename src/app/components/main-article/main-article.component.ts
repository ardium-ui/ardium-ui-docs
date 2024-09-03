import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-article',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-article.component.html',
  styleUrl: './main-article.component.scss'
})
export class MainArticleComponent {
  readonly link = input.required<string>();
}
