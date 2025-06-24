import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import {
  DebouncedSignalExampleData
} from 'txt-dist';

@Component({
  selector: 'debounced-signal-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, HeadingsModule],
  templateUrl: './debounced-signal.page.html',
  styleUrl: './debounced-signal.page.scss',
})
export class DebouncedSignalPage {
  readonly DebouncedSignalExampleData = DebouncedSignalExampleData;
}
