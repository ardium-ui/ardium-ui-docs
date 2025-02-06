import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import { KbdAppearancesExampleData, KbdBasicExampleData, KbdDirectiveExampleData, KbdDynamicExampleData, KbdFullExampleData, KbdShortcutExampleData, KbdTranslationExampleData } from 'txt-dist';

@Component({
  selector: 'kbd-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, HeadingsModule],
  templateUrl: './kbd.page.html',
  styleUrl: './kbd.page.scss',
})
export class KbdPage {
  readonly KbdBasicExampleData = KbdBasicExampleData;
  readonly KbdTranslationExampleData = KbdTranslationExampleData;
  readonly KbdFullExampleData = KbdFullExampleData;
  readonly KbdDynamicExampleData = KbdDynamicExampleData;
  readonly KbdShortcutExampleData = KbdShortcutExampleData;
  readonly KbdAppearancesExampleData = KbdAppearancesExampleData;
  readonly KbdDirectiveExampleData = KbdDirectiveExampleData;
}
