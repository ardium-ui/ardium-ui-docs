import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumButtonModule, ArdiumDialogModule } from '@ardium-ui/ui';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { CodeComponent } from 'src/app/components/code/code.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import { DialogBasicExampleData, DialogDeleteConfirmationExampleData, DialogEmittedEventsExampleData } from 'txt-dist';

@Component({
  selector: 'dialog-page',
  standalone: true,
  imports: [
    CodeExampleComponent,
    CodeComponent,
    ArticleSectionsModule,
    HeadingsModule,
    ArdiumDialogModule,
    RouterModule,
    ArdiumButtonModule
],
  templateUrl: './dialog.page.html',
  styleUrl: './dialog.page.scss',
})
export class DialogPage {
  readonly DialogBasicExampleData = DialogBasicExampleData;
  readonly DialogEmittedEventsExampleData = DialogEmittedEventsExampleData;
  readonly DialogDeleteConfirmationExampleData = DialogDeleteConfirmationExampleData;

  readonly roundedDialogOpen = signal<boolean>(false);
  readonly sharpDialogOpen = signal<boolean>(false);

  readonly providingDefaultValuesExampleCode = `export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideDialogDefaults({ confirmButtonText: 'OK' }),
  ],
};`;
}
