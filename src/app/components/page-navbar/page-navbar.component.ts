import { Component, computed, inject, input } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NavService } from '@services/nav';
import { groupBy } from '@utils';
import { GroupName } from 'src/app/utils/routes';
import { sortFeatureGroups } from 'src/app/utils/sort-feature-groups';

export interface RouteWithName extends Route {
  name: string;
  groupName?: GroupName;
}

const GROUP_SORT_ORDER: Record<GroupName, number> = {
  // components
  [GroupName.FormElements]: 1,
  [GroupName.Buttons]: 2,
  [GroupName.DataDisplay]: 3,
  [GroupName.Feedback]: 4,
  [GroupName.Layout]: 5,
  [GroupName.Popups]: 6,
  [GroupName.Stars]: 7,
  // devkit
  [GroupName.CustomSignals]: 1,
};

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

  // reversed for CSS reasons (to use sibling selectors)
  readonly mappedRouteData = computed(() =>
    groupBy<GroupName, RouteWithName>(this.routeData(), el => el.groupName ?? '')
      .sort(sortFeatureGroups)
      .map(gr => ({
        group: gr.group,
        children: gr.children
          .map(el => ({ ...el, path: `${this.baseUrl()}${el.path}` }))
          .sort((a, b) => a.name.localeCompare(b.name))
          .reverse(),
      }))
      .reverse()
  );

  isRouteActive(route: string): boolean | undefined {
    return this.navService.currentRoute()?.startsWith(route);
  }
}
