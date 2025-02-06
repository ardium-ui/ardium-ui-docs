import { CommonModule } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArdiumIconModule } from '@ardium-ui/ui';
import { scrollTo } from '@utils';
import { CodeComponent } from '../code/code.component';
import { HeadingsModule } from '../headings/headings.module';
import { ApiPageData, FunctionNonOverloadData, FunctionOverloadData } from './api-page.types';

@Component({
  selector: 'app-api-page',
  standalone: true,
  imports: [ArdiumIconModule, CommonModule, RouterModule, CodeComponent, HeadingsModule],
  templateUrl: './api-page.component.html',
  styleUrl: './api-page.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ApiPageComponent {
  private readonly _route = inject(ActivatedRoute);

  readonly data = this._route.snapshot.data as ApiPageData;

  scrollTo(tag: string) {
    scrollTo(tag, { offset: '20%' });
  }

  isString(v: string | string[]): v is string {
    return !Array.isArray(v);
  }
  isOverloadedFunction(v: FunctionNonOverloadData | FunctionOverloadData): v is FunctionOverloadData {
    return 'overloads' in v;
  }
}
