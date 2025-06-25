import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import { MapSignalBasicExampleData } from 'txt-dist';

@Component({
  selector: 'map-signal-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, HeadingsModule],
  templateUrl: './map-signal.page.html',
  styleUrl: './map-signal.page.scss',
})
export class MapSignalPage {
  readonly MapSignalBasicExampleData = MapSignalBasicExampleData;
}
