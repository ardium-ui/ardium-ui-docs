import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumDividerModule } from '@ardium-ui/ui';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { CodeComponent } from 'src/app/components/code/code.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import {
  DividerBasicExampleData,
  DividerContentAlignmentExampleData,
  DividerCustomStyleExampleData,
  DividerDirectiveContentExampleData,
  DividerDirectiveExampleData,
  DividerVariantsExampleData,
  DividerVerticalFlexItemExampleData,
} from 'txt-dist';

@Component({
  selector: 'divider-page',
  standalone: true,
  imports: [
    CodeExampleComponent,
    CodeComponent,
    ArticleSectionsModule,
    HeadingsModule,
    ArdiumDividerModule,
    RouterModule,
  ],
  templateUrl: './divider.page.html',
  styleUrl: './divider.page.scss',
})
export class DividerPage {
  readonly DividerBasicExampleData = DividerBasicExampleData;
  readonly DividerVariantsExampleData = DividerVariantsExampleData;
  readonly DividerDirectiveExampleData = DividerDirectiveExampleData;
  readonly DividerVerticalFlexItemExampleData = DividerVerticalFlexItemExampleData;
  readonly DividerContentAlignmentExampleData = DividerContentAlignmentExampleData;
  readonly DividerDirectiveContentExampleData = DividerDirectiveContentExampleData;
  readonly DividerCustomStyleExampleData = DividerCustomStyleExampleData;

  readonly providingDefaultValuesExampleCode = `export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideDividerDefaults({
      variant: 'middle',
      textAlign: 'start',
      flexItem: false,
    }),
  ],
};`;
}
