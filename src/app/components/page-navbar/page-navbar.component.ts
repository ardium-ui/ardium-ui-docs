import { Component, computed, inject, input } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NavService } from '@services/nav';
import { groupBy } from '@utils';
import { kebab } from 'case';

export interface RouteWithName extends Route {
  name: string;
  groupName?: string;
}

@Component({
  selector: 'app-page-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page-navbar.component.html',
  styleUrl: './page-navbar.component.scss',
})
export class PageNavbarComponent {
  public readonly navService = inject(NavService);

  readonly routeData = input.required<RouteWithName[]>();
  readonly baseUrl = input.required<string>();

  readonly mappedRouteData = computed(() =>
    groupBy(this.routeData(), el => el.groupName ?? '')
      .sort((a, b) => a.group.localeCompare(b.group))
      .map(gr => ({
        group: gr.group,
        children: gr.children
          .map(el => ({ ...el, path: `${this.baseUrl()}${kebab(gr.group)}/${el.path}` }))
          .sort((a, b) => a.name.localeCompare(b.name)),
      }))
  );

  isRouteActive(route: string): boolean | undefined {
    return this.navService.currentRoute()?.startsWith(route);
  }
}
