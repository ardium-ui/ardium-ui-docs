import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { AutoIdComponent } from 'src/app/components/auto-id/auto-id.component';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HoldBasicExampleData, HoldTimingsExampleData } from 'txt-dist';

@Component({
  selector: 'hold-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, AutoIdComponent],
  templateUrl: './hold.page.html',
  styleUrl: './hold.page.scss',
})
export class HoldPage {
  readonly HoldBasicExampleData = HoldBasicExampleData;
  readonly HoldTimingsExampleData = HoldTimingsExampleData;
}
