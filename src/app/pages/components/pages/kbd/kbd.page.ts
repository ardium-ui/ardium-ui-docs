import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { AutoIdComponent } from 'src/app/components/auto-id/auto-id.component';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { KbdAppearancesExampleData, KbdBasicExampleData, KbdDirectiveExampleData, KbdDynamicExampleData, KbdFullExampleData, KbdShortcutExampleData, KbdTranslationExampleData } from 'txt-dist';

@Component({
  selector: 'kbd-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, AutoIdComponent],
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
