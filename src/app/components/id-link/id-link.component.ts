import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ArdiumIconButtonModule, ArdiumIconModule } from '@ardium-ui/ui';
import { scrollTo } from '@utils';

@Component({
  selector: '[idLink][id], h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]',
  imports: [ArdiumIconButtonModule, ArdiumIconModule],
  templateUrl: './id-link.component.html',
  styleUrl: 'id-link.component.scss',
})
export class IdLinkComponent {
  private readonly router = inject(Router);

  onClick(event: MouseEvent) {
    let el = (event.target as HTMLElement).parentElement;
    if (!el) return;

    while (!el.id) {
      el = el.parentElement;
      if (!el) return;
    }

    scrollTo('#' + el.id, { offset: 96, noHighlight: true });
    this.router.navigate([], { fragment: el.id });
  }
}
