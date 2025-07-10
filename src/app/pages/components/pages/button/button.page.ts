import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import { ButtonBasicExampleData } from './../../../../../../txt-dist/button-basic-example';

@Component({
  selector: 'button-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, HeadingsModule],
  templateUrl: './button.page.html',
  styleUrl: './button.page.scss',
})
export class ButtonPage {
  readonly ButtonBasicExampleData = ButtonBasicExampleData;
}
