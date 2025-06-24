import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import { SetSignalBasicExampleData } from 'txt-dist';

@Component({
  selector: 'set-signal-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, HeadingsModule],
  templateUrl: './set-signal.page.html',
  styleUrl: './set-signal.page.scss',
})
export class SetSignalPage {
  readonly SetSignalBasicExampleData = SetSignalBasicExampleData;
}
