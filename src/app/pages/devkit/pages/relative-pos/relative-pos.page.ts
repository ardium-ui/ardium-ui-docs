import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import { RelativePosBasicExampleData } from 'txt-dist';

@Component({
  selector: 'relative-pos-page',
  standalone: true,
  imports: [ArticleSectionsModule, CodeExampleComponent, HeadingsModule],
  templateUrl: './relative-pos.page.html',
  styleUrl: './relative-pos.page.scss',
})
export class RelativePosPage {
  readonly RelativePosBasicExample = RelativePosBasicExampleData;
}
