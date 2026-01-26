import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumButtonModule } from '@ardium-ui/ui';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { CodeComponent } from 'src/app/components/code/code.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import { ButtonBasicExampleData, ButtonCompactExampleData, ButtonDisabledExampleData, ButtonIconExampleData, ButtonLinkExampleData } from 'txt-dist';

@Component({
  selector: 'button-page',
  standalone: true,
  imports: [
    CodeExampleComponent,
    CodeComponent,
    ArticleSectionsModule,
    HeadingsModule,
    ArdiumButtonModule,
    RouterModule,
  ],
  templateUrl: './button.page.html',
  styleUrl: './button.page.scss',
})
export class ButtonPage {
  readonly ButtonBasicExampleData = ButtonBasicExampleData;
  readonly ButtonLinkExampleData = ButtonLinkExampleData;
  readonly ButtonCompactExampleData = ButtonCompactExampleData;
  readonly ButtonDisabledExampleData = ButtonDisabledExampleData;
  readonly ButtonIconExampleData = ButtonIconExampleData;

  readonly providingDefaultValuesExampleCode = `export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideButtonDefaults({ variant: 'sharp' }), // all buttons will now be sharp by default
  ],
};`;
}
