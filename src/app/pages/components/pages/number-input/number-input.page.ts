import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumFormFieldModule } from '@ardium-ui/ui';
import { NumberInputBasicExampleData } from 'txt-dist';
import { ArticleSectionsModule } from '../../../../components/article-sections/article-sections.module';
import { CodeExampleComponent } from '../../../../components/code-example/code-example.component';
import { CodeComponent } from '../../../../components/code/code.component';
import { HeadingsModule } from '../../../../components/headings/headings.module';

@Component({
  selector: 'number-input-page',
  standalone: true,
  imports: [
    CodeExampleComponent,
    CodeComponent,
    ArticleSectionsModule,
    HeadingsModule,
    ArdiumFormFieldModule,
    RouterModule,
  ],
  templateUrl: './number-input.page.html',
  styleUrl: './number-input.page.scss',
})
export class NumberInputPage {
  readonly NumberInputBasicExampleData = NumberInputBasicExampleData;

  readonly providingDefaultValuesExampleCode = `export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideNumberInputDefaults({ min: 0, max: 50, step: 5 }),
  ],
};`;
}
