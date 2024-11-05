import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';

@Component({
  selector: 'dom-boxes-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule],
  templateUrl: './dom-boxes.page.html',
  styleUrl: './dom-boxes.page.scss',
})
export class DOMBoxesPage {}
