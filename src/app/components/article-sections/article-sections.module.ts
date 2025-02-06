import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeExampleComponent } from '../code-example/code-example.component';
import { HeadingsModule } from '../headings/headings.module';
import { MainArticleComponent } from '../main-article';
import { IntroductionComponent } from './introduction/introduction.component';
import { PrerequisitesComponent } from './prerequisites/prerequisites.component';

@NgModule({
  declarations: [IntroductionComponent, PrerequisitesComponent],
  imports: [CommonModule, CodeExampleComponent, MainArticleComponent, HeadingsModule],
  exports: [IntroductionComponent, PrerequisitesComponent],
})
export class ArticleSectionsModule {}
