import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumCardModule } from '@ardium-ui/ui';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, ArdiumCardModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  readonly data = input.required<{ path?: string; name: string; desc: string; img?: string }[]>();

  readonly topText = input.required<string>();
}
