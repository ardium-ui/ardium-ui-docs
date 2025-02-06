import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { AutoIdComponent } from 'src/app/components/auto-id/auto-id.component';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { EscapeHtmlExampleData } from 'txt-dist';

@Component({
  selector: 'escape-html-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, AutoIdComponent],
  templateUrl: './escape-html.page.html',
  styleUrl: './escape-html.page.scss',
})
export class EscapeHtmlPage {
  readonly EscapeHTMLExampleData = EscapeHtmlExampleData;
}
