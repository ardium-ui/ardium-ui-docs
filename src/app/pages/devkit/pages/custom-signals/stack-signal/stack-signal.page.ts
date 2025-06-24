import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import { StackSignalBasicExampleData } from 'txt-dist';

@Component({
  selector: 'stack-signal-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, HeadingsModule],
  templateUrl: './stack-signal.page.html',
  styleUrl: './stack-signal.page.scss',
})
export class StackSignalPage {
  readonly StackSignalBasicExampleData = StackSignalBasicExampleData;
}
