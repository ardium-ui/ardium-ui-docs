import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { AutoIdComponent } from 'src/app/components/auto-id/auto-id.component';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { InfiniteScrollBasicExampleData, InfiniteScrollHostExampleData } from 'txt-dist';

@Component({
  selector: 'infinite-scroll-page',
  standalone: true,
  imports: [ArticleSectionsModule, CodeExampleComponent, AutoIdComponent],
  templateUrl: './infinite-scroll.page.html',
  styleUrl: './infinite-scroll.page.scss',
})
export class InfiniteScrollPage {
  readonly InfiniteScrollBasicExample = InfiniteScrollBasicExampleData;
  readonly InfiniteScrollHostExample = InfiniteScrollHostExampleData;
}
