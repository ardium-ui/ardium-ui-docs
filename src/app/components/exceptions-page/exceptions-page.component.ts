import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { scrollTo } from '@utils';
import { ExampleWithResultComponent } from '../example-with-result/example-with-result.component';
import { ExceptionSeverityComponent } from "./exception-severity/exception-severity.component";
import { ExceptionsPageData } from './exceptions-page.types';

@Component({
  selector: 'app-exceptions-page',
  standalone: true,
  imports: [ExceptionSeverityComponent, ExampleWithResultComponent],
  templateUrl: './exceptions-page.component.html',
  styleUrl: './exceptions-page.component.scss',
})
export class ExceptionsPageComponent {
  private readonly _route = inject(ActivatedRoute);

  readonly data = this._route.snapshot.data as ExceptionsPageData;

  scrollTo(tag: string) {
    scrollTo(tag, '20%');
  }
  isString(v: string | string[]): v is string {
    return !Array.isArray(v);
  }
}
