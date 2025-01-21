import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { ClickOutsideExampleData } from 'txt-dist';

@Component({
  selector: 'click-outside-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule],
templateUrl: './click-outside.page.html',
  styleUrl: './click-outside.page.scss',
})
export class ClickOutsidePage {
  readonly ClickOutsideExampleData = ClickOutsideExampleData;
}
