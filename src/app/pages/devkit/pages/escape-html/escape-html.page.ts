import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import { EscapeHtmlExampleData } from 'txt-dist';

@Component({
  selector: 'escape-html-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, HeadingsModule],
  templateUrl: './escape-html.page.html',
  styleUrl: './escape-html.page.scss',
})
export class EscapeHtmlPage {
  readonly EscapeHTMLExampleData = EscapeHtmlExampleData;
}
