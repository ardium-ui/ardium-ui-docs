import { Component, inject } from '@angular/core';
import { ComponentLoaderService } from '@services/component-loader';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { CodeComponent } from 'src/app/components/code/code.component';
import { KbdAppearancesExampleData, KbdBasicExampleData, KbdDirectiveExampleData, KbdDynamicExampleData, KbdFullExampleData, KbdShortcutExampleData, KbdTranslationExampleData } from 'txt-dist';

@Component({
  selector: 'kbd-page',
  standalone: true,
  imports: [CodeComponent, CodeExampleComponent, ArticleSectionsModule],
  templateUrl: './kbd.page.html',
  styleUrl: './kbd.page.scss',
})
export class KbdPage {
  readonly componentLoader = inject(ComponentLoaderService);

  readonly KbdBasicExampleData = KbdBasicExampleData;
  readonly KbdTranslationExampleData = KbdTranslationExampleData;
  readonly KbdFullExampleData = KbdFullExampleData;
  readonly KbdDynamicExampleData = KbdDynamicExampleData;
  readonly KbdShortcutExampleData = KbdShortcutExampleData;
  readonly KbdAppearancesExampleData = KbdAppearancesExampleData;
  readonly KbdDirectiveExampleData = KbdDirectiveExampleData;
}
