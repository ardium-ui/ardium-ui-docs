import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

const POSSIBLE_TABS = ['overview', 'api', 'exceptions'];

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './common.page.html',
  styleUrl: './common.page.scss',
})
export class CommonPage {
  private readonly _router = inject(Router);

  isActiveRoute(route: string): boolean {
    return true;
  }
  constructor() {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // this.currentRoute.set(event.url);
        console.log(event);
      }
    });
  }
}
