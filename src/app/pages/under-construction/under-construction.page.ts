import { Component } from '@angular/core';
import { HeadingsModule } from 'src/app/components/headings/headings.module';

@Component({
  selector: 'app-under-construction',
  standalone: true,
  imports: [HeadingsModule],
  templateUrl: './under-construction.page.html',
  styleUrl: './under-construction.page.scss',
})
export class UnderConstructionPage {}
