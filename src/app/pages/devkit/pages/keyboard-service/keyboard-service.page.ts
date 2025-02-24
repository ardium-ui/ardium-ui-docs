import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import { KeyboardServiceListenToKeyExampleData, KeyboardServiceListenToKeyStateExampleData, KeyboardServiceListenToShortcutExampleData, KeyboardServiceModifierKeyStateExampleData } from 'txt-dist';

@Component({
  selector: 'keyboard-service-page',
  standalone: true,
  imports: [ArticleSectionsModule, CodeExampleComponent, HeadingsModule],
  templateUrl: './keyboard-service.page.html',
  styleUrl: './keyboard-service.page.scss',
})
export class KeyboardServicePage {
  readonly KeyboardServiceListenToKeyExample = KeyboardServiceListenToKeyExampleData;
  readonly KeyboardServiceListenToShortcutExample = KeyboardServiceListenToShortcutExampleData;
  readonly KeyboardServiceListenToKeyStateExample = KeyboardServiceListenToKeyStateExampleData;
  readonly KeyboardServiceModifierKeyStateExample = KeyboardServiceModifierKeyStateExampleData;
}
