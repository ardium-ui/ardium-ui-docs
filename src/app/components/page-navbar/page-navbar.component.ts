import { Component, computed, inject, input } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NavService } from '@services/nav';

@Component({
  selector: 'app-page-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page-navbar.component.html',
  styleUrl: './page-navbar.component.scss',
})
export class PageNavbarComponent {
  public readonly navService = inject(NavService);

  readonly routeData = input.required<(Route & { name: string })[]>();
  readonly baseUrl = input.required<string>();

  readonly mappedRouteData = computed(() =>
    this.routeData()
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(v => ({ ...v, path: this.baseUrl() + v.path }))
  );

  isRouteActive(route: string): boolean | undefined {
    return this.navService.currentRoute()?.startsWith(route);
  }
}
