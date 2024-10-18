import { Component } from '@angular/core';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { devkitRouteData } from '../../devkit.routes';

@Component({
  selector: 'devkit-home-page',
  standalone: true,
  imports: [HomePageComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class DevkitHomePage {
  readonly routeData = devkitRouteData();
}
