import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AutoIdComponent } from '../internal/auto-id/auto-id.component';
import { H1Component } from './h1.component';
import { H2Component } from './h2.component';
import { H3Component } from './h3.component';
import { H4Component } from './h4.component';
import { H5Component } from './h5.component';
import { H6Component } from './h6.component';

@NgModule({
  declarations: [H1Component, H2Component, H3Component, H4Component, H5Component, H6Component],
  imports: [CommonModule, AutoIdComponent],
  exports: [H1Component, H2Component, H3Component, H4Component, H5Component, H6Component],
})
export class HeadingsModule {}
