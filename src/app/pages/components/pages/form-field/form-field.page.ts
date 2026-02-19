import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumFormFieldModule } from '@ardium-ui/ui';
import dedent from 'dedent';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { CodeComponent } from 'src/app/components/code/code.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import {
  FormFieldAutoErrorExampleData,
  FormFieldBasicExampleData,
  FormFieldCharacterCounterExampleData,
  FormFieldRequiredOptionalLabelsExampleData,
} from 'txt-dist';

@Component({
  selector: 'form-field-page',
  standalone: true,
  imports: [
    CodeExampleComponent,
    CodeComponent,
    ArticleSectionsModule,
    HeadingsModule,
    ArdiumFormFieldModule,
    RouterModule,
  ],
  templateUrl: './form-field.page.html',
  styleUrl: './form-field.page.scss',
})
export class FormFieldPage {
  readonly FormFieldBasicExampleData = FormFieldBasicExampleData;
  readonly FormFieldCharacterCounterExampleData = FormFieldCharacterCounterExampleData;
  readonly FormFieldAutoErrorExampleData = FormFieldAutoErrorExampleData;
  readonly FormFieldRequiredOptionalLabelsExampleData = FormFieldRequiredOptionalLabelsExampleData;

  readonly customComponentFormFieldCompatibilityCode = dedent`
  @Component({
    selector: 'app-my-component',
    templateUrl: './my-component.component.html',
    styleUrls: ['./my-component.component.scss'],
    providers: [
      {
        provide: ARD_FORM_FIELD_CONTROL,
        useExisting: MyComponent,
      },
    ]
  })
  export class MyComponent implements ArdFormFieldControl {
    // ...
  }
  `;

  readonly autoErrorExampleCode = dedent`
  export const appConfig: ApplicationConfig = {
    providers: [
      // ... other providers
      provideErrorMap({
        required: 'This field is required.',
        minlength: (errorData) => \`Enter at least \${errorData.requiredLength} characters.\`,
        maxlength: (errorData) => \`Enter no more than \${errorData.requiredLength} characters.\`,
        email: 'Enter a valid email address.',
        myCustomError: 'This is a custom error message for the "myCustomError" validation error.',
      }),
    ],
  };`;

  readonly hintErrorDirectiveCode = dedent`
  <ard-form-field>
    <ard-label>My form field</ard-label>
    <ard-input />
    <div ard-hint>Div element acting as a hint</div>
  </ard-form-field>
  `;

  readonly providingDefaultValuesExampleCode = dedent`
  export const appConfig: ApplicationConfig = {
    providers: [
      // ... other providers
      provideFormFieldDefaults({ reserveHintLine: true, labelOptionalText: '(optional)' }),
    ],
  };`;
}
