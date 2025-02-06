import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import { InfiniteScrollBasicExampleData, InfiniteScrollHostExampleData } from 'txt-dist';

@Component({
  selector: 'infinite-scroll-page',
  standalone: true,
  imports: [ArticleSectionsModule, CodeExampleComponent, HeadingsModule],
  templateUrl: './infinite-scroll.page.html',
  styleUrl: './infinite-scroll.page.scss',
})
export class InfiniteScrollPage {
  readonly InfiniteScrollBasicExample = InfiniteScrollBasicExampleData;
  readonly InfiniteScrollHostExample = InfiniteScrollHostExampleData;
}
