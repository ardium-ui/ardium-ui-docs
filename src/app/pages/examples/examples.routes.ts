import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'devkit/infinite-scroll/basic-usage-example',
    loadComponent: () =>
      import('txt-dist/infinite-scroll-basic-example').then(data => data.InfiniteScrollBasicExampleData.component),
  },
];
