import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavService } from '@services/nav';

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './common.page.html',
  styleUrl: './common.page.scss',
})
export class CommonPage {
  readonly POSSIBLE_TABS = ['overview', 'api', 'exceptions'];

  private readonly _navService = inject(NavService);

  isActiveRoute(route: string) {
    return this._navService.currentRoute()?.endsWith(route);
  }
}
