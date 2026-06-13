import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumGridModule, ArdiumStackModule } from '@ardium-ui/ui';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { CodeComponent } from 'src/app/components/code/code.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import {
  GridAutoLayoutExampleData,
  GridBasicExampleData,
  GridColumnsExampleData,
  GridMultipleBreakpointsExampleData,
  GridNestedExampleData,
  GridResponsiveValuesExampleData,
  GridSpacingExampleData,
  GridStackCompanionExampleData,
  StackBasicExampleData,
  StackDirectionExampleData
} from 'txt-dist';

@Component({
  selector: 'grid-page',
  standalone: true,
  imports: [
    CodeExampleComponent,
    CodeComponent,
    ArticleSectionsModule,
    HeadingsModule,
    ArdiumGridModule,
    ArdiumStackModule,
    RouterModule,
  ],
  templateUrl: './grid.page.html',
  styleUrl: './grid.page.scss',
})
export class GridPage {
  readonly GridBasicExampleData = GridBasicExampleData;
  readonly GridMultipleBreakpointsExampleData = GridMultipleBreakpointsExampleData;
  readonly GridSpacingExampleData = GridSpacingExampleData;
  readonly GridResponsiveValuesExampleData = GridResponsiveValuesExampleData;
  readonly GridAutoLayoutExampleData = GridAutoLayoutExampleData;
  readonly GridNestedExampleData = GridNestedExampleData;
  readonly GridColumnsExampleData = GridColumnsExampleData;
  readonly GridStackCompanionExampleData = GridStackCompanionExampleData;
  readonly StackBasicExampleData = StackBasicExampleData;
  readonly StackDirectionExampleData = StackDirectionExampleData;

  readonly providingBreakpointsExampleCode = `export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideBreakpoints(),
    // or if custom breakpoints are needed:
    provideBreakpoints({
      sm: '30rem',
      md: '48rem',
      lg: '62rem',
      xl: '80rem',
    }),
  ],
};`;
  readonly providingDefaultValuesExampleCode = `export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideGridDefaults({ columns: 12, spacing: { xs: 1, md: 2 } }),
    provideStackDefaults({ direction: 'column', spacing: 2 }),
  ],
};`;
}