import { Component } from '@angular/core';
import { ArdiumCardModule } from '@ardium-ui/ui';
import { componentRouteData } from '../../components.routes';

@Component({
  selector: 'components-home-page',
  standalone: true,
  imports: [ArdiumCardModule],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class ComponentsHomePage {
  readonly routeData = componentRouteData;
}
