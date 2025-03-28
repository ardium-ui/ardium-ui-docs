import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import { HoldBasicExampleData, HoldTimingsExampleData } from 'txt-dist';

@Component({
  selector: 'hold-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, HeadingsModule],
  templateUrl: './hold.page.html',
  styleUrl: './hold.page.scss',
})
export class HoldPage {
  readonly HoldBasicExampleData = HoldBasicExampleData;
  readonly HoldTimingsExampleData = HoldTimingsExampleData;
}
