import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumFormFieldModule } from '@ardium-ui/ui';
import { TabberBasicExampleData, TabberLabelExampleData, TabberLabelTemplatesExampleData } from 'txt-dist';
import { ArticleSectionsModule } from '../../../../components/article-sections/article-sections.module';
import { CodeExampleComponent } from '../../../../components/code-example/code-example.component';
import { CodeComponent } from '../../../../components/code/code.component';
import { HeadingsModule } from '../../../../components/headings/headings.module';

@Component({
  selector: 'tabber-page',
  standalone: true,
  imports: [
    CodeExampleComponent,
    CodeComponent,
    ArticleSectionsModule,
    HeadingsModule,
    ArdiumFormFieldModule,
    RouterModule,
  ],
  templateUrl: './tabber.page.html',
  styleUrl: './tabber.page.scss',
})
export class TabberPage {
  readonly TabberBasicExampleData = TabberBasicExampleData;
  readonly TabberLabelExampleData = TabberLabelExampleData;
  readonly TabberLabelTemplatesExampleData = TabberLabelTemplatesExampleData;

  readonly providingDefaultValuesExampleCode = `export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideTabberDefaults({ stretchTabs: true, color: 'none' }),
  ],
};`;
}
