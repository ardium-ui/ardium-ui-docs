import { Component, inject } from '@angular/core';
import { ArdiumButtonModule } from '@ardium-ui/ui';
import { Router, RouterModule } from '@angular/router';
import { GitHubSvg } from '@svg';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ArdiumButtonModule, GitHubSvg],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly router = inject(Router);

  navigateTo(url: string): void {
    if (url.startsWith('https')) {
      window.open(url, '_blank');
      return;
    }
    this.router.navigate([url]);
  }
}
