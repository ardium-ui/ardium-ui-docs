import { Component, computed, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumCardModule } from '@ardium-ui/ui';
import { groupBy } from '@utils';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, ArdiumCardModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  readonly module = input.required<string>();
  readonly data = input.required<{ path?: string; name: string; desc: string; img?: string; groupName?: string }[]>();

  readonly mappedRouteData = computed(() =>
    groupBy(this.data(), el => el.groupName ?? '')
      .sort((a, b) => a.group.localeCompare(b.group))
      .map(gr => ({
        group: gr.group,
        children: gr.children
          .map(el => ({ ...el, path: `/${this.module()}/${el.path}` }))
          .sort((a, b) => a.name.localeCompare(b.name)),
      }))
  );

  readonly topText = input.required<string>();
}
