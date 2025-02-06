import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import { DomBoxesExampleData } from './../../../../../../txt-dist/dom-boxes-example';

@Component({
  selector: 'dom-boxes-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, HeadingsModule],
  templateUrl: './dom-boxes.page.html',
  styleUrl: './dom-boxes.page.scss',
})
export class DOMBoxesPage {
  readonly DomBoxesExampleData = DomBoxesExampleData;
}
