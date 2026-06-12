import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumButtonModule } from '@ardium-ui/ui';
import {
  ButtonGroupBasicExampleData,
  ButtonGroupCompactExampleData,
  ButtonGroupDisabledExampleData,
  ButtonGroupMixedElementsExampleData,
  ButtonGroupNestedExampleData,
  ButtonGroupVerticalExampleData,
} from '@examples';
import dedent from 'dedent';
import { ArticleSectionsModule } from '../../../../components/article-sections/article-sections.module';
import { CodeExampleComponent } from '../../../../components/code-example/code-example.component';
import { CodeComponent } from '../../../../components/code/code.component';
import { HeadingsModule } from '../../../../components/headings/headings.module';

@Component({
  selector: 'button-group-page',
  standalone: true,
  imports: [
    CodeExampleComponent,
    CodeComponent,
    ArticleSectionsModule,
    HeadingsModule,
    ArdiumButtonModule,
    RouterModule,
  ],
  templateUrl: './button-group.page.html',
  styleUrl: './button-group.page.scss',
})
export class ButtonGroupPage {
  readonly ButtonGroupBasicExampleData = ButtonGroupBasicExampleData;
  readonly ButtonGroupNestedExampleData = ButtonGroupNestedExampleData;
  readonly ButtonGroupVerticalExampleData = ButtonGroupVerticalExampleData;
  readonly ButtonGroupCompactExampleData = ButtonGroupCompactExampleData;
  readonly ButtonGroupMixedElementsExampleData = ButtonGroupMixedElementsExampleData;
  readonly ButtonGroupDisabledExampleData = ButtonGroupDisabledExampleData;

  readonly basicButtonGroupExampleCode = dedent`<ard-button-group>
    <ard-button>Cut</ard-button>
    <ard-button>Copy</ard-button>
    <ard-button>Paste</ard-button>
  </ard-button-group>`;

  readonly providingDefaultValuesExampleCode = dedent`export const appConfig: ApplicationConfig = {
    providers: [
      // ... other providers
      provideButtonGroupDefaults({ compact: true }), // all button groups will now be compact by default
    ],
  };`;
}
