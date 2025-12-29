import { CommonModule } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArdiumIconModule } from '@ardium-ui/ui';
import { CodeComponent } from '../code/code.component';
import { HeadingsModule } from '../headings/headings.module';
import { StylingPageData } from './styling-page.types';

@Component({
  selector: 'app-styling-page',
  standalone: true,
  imports: [ArdiumIconModule, CommonModule, RouterModule, CodeComponent, HeadingsModule],
  templateUrl: './styling-page.component.html',
  styleUrl: './styling-page.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class StylingPageComponent {
  private readonly _route = inject(ActivatedRoute);

  readonly data = this._route.snapshot.data as StylingPageData;
}
