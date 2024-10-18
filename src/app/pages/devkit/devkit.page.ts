import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNavbarComponent } from '../../components/page-navbar/page-navbar.component';
import { devkitRouteData } from './devkit.routes';

@Component({
  selector: 'devkit-page',
  standalone: true,
  imports: [RouterModule, PageNavbarComponent],
  templateUrl: './devkit.page.html',
  styleUrl: './devkit.page.scss'
})
export class DevkitPage {
  readonly routeData = devkitRouteData();
}
