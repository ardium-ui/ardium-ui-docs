import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumFormFieldModule, ArdiumNumberInputModule } from '@ardium-ui/ui';
import {
  NumberInputBasicExampleData,
  NumberInputCompactExampleData,
  NumberInputEmittedEventsExampleData,
  NumberInputFloatExampleData,
  NumberInputMinMaxStepExampleData,
  NumberInputNoButtonsExampleData,
  NumberInputPrefixSuffixExampleData
} from 'txt-dist';
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
    ArdiumNumberInputModule,
  ],
  templateUrl: './number-input.page.html',
  styleUrl: './number-input.page.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NumberInputPage {
  readonly NumberInputBasicExampleData = NumberInputBasicExampleData;
  readonly NumberInputEmittedEventsExampleData = NumberInputEmittedEventsExampleData;
  readonly NumberInputMinMaxStepExampleData = NumberInputMinMaxStepExampleData;
  readonly NumberInputFloatExampleData = NumberInputFloatExampleData;
  readonly NumberInputCompactExampleData = NumberInputCompactExampleData;
  readonly NumberInputNoButtonsExampleData = NumberInputNoButtonsExampleData;
  readonly NumberInputPrefixSuffixExampleData = NumberInputPrefixSuffixExampleData;

  readonly providingDefaultValuesExampleCode = `export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideNumberInputDefaults({ min: 0, max: 50, step: 5 }),
  ],
};`;
}
