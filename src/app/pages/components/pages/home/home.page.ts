import { Component } from '@angular/core';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { componentRouteData } from '../../components.routes';

@Component({
  selector: 'components-home-page',
  standalone: true,
  imports: [HomePageComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class ComponentsHomePage {
  readonly routeData = componentRouteData();
}
