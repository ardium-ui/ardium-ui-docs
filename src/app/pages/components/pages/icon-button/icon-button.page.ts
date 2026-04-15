import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumIconButtonModule, ArdiumIconModule } from '@ardium-ui/ui';
import { IconButtonBasicExampleData, IconButtonCompactExampleData, IconButtonDisabledExampleData } from 'txt-dist';
import { ArticleSectionsModule } from '../../../../components/article-sections/article-sections.module';
import { CodeExampleComponent } from '../../../../components/code-example/code-example.component';
import { CodeComponent } from '../../../../components/code/code.component';
import { HeadingsModule } from '../../../../components/headings/headings.module';

@Component({
  selector: 'icon-button-page',
  standalone: true,
  imports: [
    CodeExampleComponent,
    CodeComponent,
    ArticleSectionsModule,
    HeadingsModule,
    ArdiumIconButtonModule,
    ArdiumIconModule,
    RouterModule,
  ],
  templateUrl: './icon-button.page.html',
  styleUrl: './icon-button.page.scss',
})
export class IconButtonPage {
  readonly IconButtonBasicExampleData = IconButtonBasicExampleData;
  readonly IconButtonCompactExampleData = IconButtonCompactExampleData;
  readonly IconButtonDisabledExampleData = IconButtonDisabledExampleData;

  readonly providingDefaultValuesExampleCode = `export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideIconButtonDefaults({ color: 'primary' }), // all icon buttons will now be primary-colored by default
  ],
};`;
}
