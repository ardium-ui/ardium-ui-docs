import { Component, computed, inject, input, signal } from '@angular/core';
import { NavigationEnd, Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page-navbar.component.html',
  styleUrl: './page-navbar.component.scss',
})
export class PageNavbarComponent {
  readonly routeData = input.required<(Route & { name: string })[]>();
  readonly baseUrl = input.required<string>();

  readonly mappedRouteData = computed(() =>
    this.routeData()
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(v => ({ ...v, path: this.baseUrl() + v.path }))
  );

  private readonly _router = inject(Router);

  readonly currentRoute = signal<string | undefined>(undefined);

  constructor() {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          console.log(event.url, this.mappedRouteData());
        }, 1000);
        this.currentRoute.set(event.url);
      }
    });
  }
}
