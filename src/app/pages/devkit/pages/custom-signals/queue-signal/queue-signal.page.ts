import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import { QueueSignalBasicExampleData } from 'txt-dist';

@Component({
  selector: 'queue-signal-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, HeadingsModule],
  templateUrl: './queue-signal.page.html',
  styleUrl: './queue-signal.page.scss',
})
export class QueueSignalPage {
  readonly QueueSignalBasicExampleData = QueueSignalBasicExampleData;
}
