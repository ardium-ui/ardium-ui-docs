import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ArdiumButtonModule } from '@ardium-ui/ui';
import { GitHubSvg } from '@svg';
import { LogoDenseComponent } from "../logo/logo-dense.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ArdiumButtonModule, GitHubSvg, LogoDenseComponent],
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
