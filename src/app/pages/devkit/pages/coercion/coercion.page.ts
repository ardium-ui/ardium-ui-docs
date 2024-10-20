import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { CodeComponent } from 'src/app/components/code/code.component';
import { CoercionBooleanExampleData, CoercionDateExampleData, CoercionNumberExampleData, CoercionUsefulnessExampleData } from 'txt-dist';

@Component({
  selector: 'coercion-page',
  standalone: true,
  imports: [CodeComponent, CodeExampleComponent, ArticleSectionsModule],
  templateUrl: './coercion.page.html',
  styleUrl: './coercion.page.scss',
})
export class CoercionPage {
  readonly CoercionBooleanExampleData = CoercionBooleanExampleData;
  readonly CoercionNumberExampleData = CoercionNumberExampleData;
  readonly CoercionDateExampleData = CoercionDateExampleData;
  readonly CoercionUsefulnessExampleData = CoercionUsefulnessExampleData;

  readonly arrayExampleCode = `// input         ->  output
null             ->  []
""               ->  []
"a,b,c"          ->  ["a", "b", "c"]
"1,2,3"          ->  ["1", "2", "3"]
["a", "b ", ""]  ->  ["a", "b"]
[1, [2, 3]]      ->  ["1", "2,3"]`;
}
