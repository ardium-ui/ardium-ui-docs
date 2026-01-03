import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumFormFieldModule } from '@ardium-ui/ui';
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
  ],
  templateUrl: './slider.page.html',
  styleUrl: './slider.page.scss',
})
export class SliderPage {
  // readonly TabberBasicExampleData = TabberBasicExampleData;

  readonly providingDefaultValuesExampleCode = `export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideSliderDefaults({ color: 'none' }),
  ],
};`;
}
