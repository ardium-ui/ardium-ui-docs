import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNavbarComponent } from '../../components/page-navbar/page-navbar.component';
import { componentRouteData } from './components.routes';
import { KbdPage } from './pages/kbd/kbd.page';

@Component({
  selector: 'components-page',
  standalone: true,
  imports: [RouterModule, KbdPage, PageNavbarComponent],
  templateUrl: './components.page.html',
  styleUrl: './components.page.scss'
})
export class ComponentsPage {
  readonly routeData = componentRouteData();
}
