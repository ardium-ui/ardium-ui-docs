import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNavbarComponent } from '../../components/page-navbar/page-navbar.component';
import { componentRouteData } from './components.routes';

@Component({
  selector: 'components-page',
  standalone: true,
  imports: [RouterModule, PageNavbarComponent],
  templateUrl: './components.page.html',
  styleUrl: './components.page.scss'
})
export class ComponentsPage {
  readonly routeData = componentRouteData();
}
