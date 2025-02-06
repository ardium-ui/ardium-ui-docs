import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { AutoIdComponent } from 'src/app/components/auto-id/auto-id.component';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { DomBoxesExampleData } from './../../../../../../txt-dist/dom-boxes-example';

@Component({
  selector: 'dom-boxes-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, AutoIdComponent],
templateUrl: './dom-boxes.page.html',
  styleUrl: './dom-boxes.page.scss',
})
export class DOMBoxesPage {
  readonly DomBoxesExampleData = DomBoxesExampleData;
}
