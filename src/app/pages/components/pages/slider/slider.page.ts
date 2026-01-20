import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumFormFieldModule } from '@ardium-ui/ui';
import { KeyboardInteractionsComponent } from "src/app/components/keyboard-interactions/keyboard-interactions.component";
import { SliderBasicExampleData, SliderLabelObjectsExampleData, SliderNonLinearExampleData, SliderRangeExampleData, SliderRangeSelectionBehaviorsExampleData } from 'txt-dist';
import { ArticleSectionsModule } from '../../../../components/article-sections/article-sections.module';
import { CodeExampleComponent } from '../../../../components/code-example/code-example.component';
import { CodeComponent } from '../../../../components/code/code.component';
import { HeadingsModule } from '../../../../components/headings/headings.module';

@Component({
  selector: 'slider-page',
  standalone: true,
  imports: [
    CodeExampleComponent,
    CodeComponent,
    ArticleSectionsModule,
    HeadingsModule,
    ArdiumFormFieldModule,
    RouterModule,
    KeyboardInteractionsComponent
],
  templateUrl: './slider.page.html',
  styleUrl: './slider.page.scss',
})
export class SliderPage {
  readonly SliderBasicExampleData = SliderBasicExampleData;
  readonly SliderRangeExampleData = SliderRangeExampleData;
  readonly SliderRangeSelectionBehaviorsExampleData = SliderRangeSelectionBehaviorsExampleData;
  readonly SliderLabelObjectsExampleData = SliderLabelObjectsExampleData;
  readonly SliderNonLinearExampleData = SliderNonLinearExampleData;

  readonly sliderMinMaxStepExampleCode = `<ard-slider min="1" max="10" step="2" value="6" />`;

  readonly providingDefaultValuesExampleCode = `export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideSliderDefaults({ min: 0, max: 10, step: 2 }),
  ],
};`;
}
