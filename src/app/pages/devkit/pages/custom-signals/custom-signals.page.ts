import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { DebouncedSignalExampleData, PersistentSignalCookiesExampleData, PersistentSignalExampleData, PersistentSignalLocalStorageExampleData, PersistentSignalSerializationExampleData, QueryParamSignalExampleData, QueryParamSignalSerializationExampleData, ThrottledSignalExampleData } from 'txt-dist';

@Component({
  selector: 'custom-signals-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule],
templateUrl: './custom-signals.page.html',
  styleUrl: './custom-signals.page.scss',
})
export class CustomSignalsPage {
  readonly PersistentSignalExampleData = PersistentSignalExampleData;
  readonly PersistentSignalLocalStorageExampleData = PersistentSignalLocalStorageExampleData;
  readonly PersistentSignalCookiesExampleData = PersistentSignalCookiesExampleData;
  readonly PersistentSignalSerializationExampleData = PersistentSignalSerializationExampleData;

  readonly QueryParamSignalExampleData = QueryParamSignalExampleData;
  readonly QueryParamSignalSerializationExampleData = QueryParamSignalSerializationExampleData;

  readonly DebouncedSignalExampleData = DebouncedSignalExampleData;

  readonly ThrottledSignalExampleData = ThrottledSignalExampleData;
}
