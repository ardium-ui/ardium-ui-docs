import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { CodeComponent } from 'src/app/components/code/code.component';
import { PersistentSignalCookiesExampleData, PersistentSignalExampleData, PersistentSignalLocalStorageExampleData, PersistentSignalSerializationExampleData, QueryParamSignalExampleData, QueryParamSignalSerializationExampleData } from 'txt-dist';

@Component({
  selector: 'custom-signals-page',
  standalone: true,
  imports: [CodeComponent, CodeExampleComponent, ArticleSectionsModule],
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
}
