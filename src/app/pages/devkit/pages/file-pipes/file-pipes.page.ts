import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { FilePipesExampleData } from 'txt-dist';

@Component({
  selector: 'file-pipes-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule],
  templateUrl: './file-pipes.page.html',
  styleUrl: './file-pipes.page.scss',
})
export class FilePipesPage {
  readonly FilePipesExampleData = FilePipesExampleData;
}
