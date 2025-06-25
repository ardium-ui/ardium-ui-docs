import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import {
  QueryParamSignalExampleData,
  QueryParamSignalSerializationExampleData
} from 'txt-dist';

@Component({
  selector: 'query-param-signal-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, HeadingsModule],
  templateUrl: './query-param-signal.page.html',
  styleUrl: './query-param-signal.page.scss',
})
export class QueryParamSignalPage {
  readonly QueryParamSignalExampleData = QueryParamSignalExampleData;
  readonly QueryParamSignalSerializationExampleData = QueryParamSignalSerializationExampleData;
}
