import { CommonModule } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArdiumIconModule } from '@ardium-ui/ui';
import { ApiPageData } from './api-page.types';

@Component({
  selector: 'app-api-page',
  standalone: true,
  imports: [ArdiumIconModule, CommonModule],
  templateUrl: './api-page.component.html',
  styleUrl: './api-page.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ApiPageComponent {
  private readonly _route = inject(ActivatedRoute);

  readonly data = this._route.snapshot.data as ApiPageData;

  isString(v: string | string[]): v is string {
    return !Array.isArray(v);
  }
}
