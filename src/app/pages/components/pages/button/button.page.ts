import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumButtonModule } from '@ardium-ui/ui';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import { ButtonBasicExampleData, ButtonIconExampleData } from 'txt-dist';

@Component({
  selector: 'button-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, HeadingsModule, ArdiumButtonModule, RouterModule],
templateUrl: './button.page.html',
  styleUrl: './button.page.scss',
})
export class ButtonPage {
  readonly ButtonBasicExampleData = ButtonBasicExampleData;
  readonly ButtonIconExampleData = ButtonIconExampleData;
}
