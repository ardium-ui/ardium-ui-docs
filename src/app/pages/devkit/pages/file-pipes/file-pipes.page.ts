import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { AutoIdComponent } from 'src/app/components/auto-id/auto-id.component';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { FilePipesExampleData } from 'txt-dist';

@Component({
  selector: 'file-pipes-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, AutoIdComponent],
  templateUrl: './file-pipes.page.html',
  styleUrl: './file-pipes.page.scss',
})
export class FilePipesPage {
  readonly FilePipesExampleData = FilePipesExampleData;
}
