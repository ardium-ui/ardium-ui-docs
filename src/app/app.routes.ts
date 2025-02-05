import { Routes } from '@angular/router';
import { ComponentsPage } from './pages/components/components.page';
import { DevkitPage } from './pages/devkit/devkit.page';
import { ExamplesPage } from './pages/examples/examples.component';
import { HomePage } from './pages/home/home.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { getExceptionCodePageUrl } from './utils/exception-codes';

export const routes: Routes = [
  // basic pages
  { path: '', component: HomePage, title: 'Ardium UI Docs' },
  {
    path: 'components',
    component: ComponentsPage,
    title: 'Ardium UI Docs',
    loadChildren: () => import('./pages/components/components.routes').then(routes => routes.COMPONENT_ROUTES),
  },
  {
    path: 'devkit',
    component: DevkitPage,
    title: 'Ardium UI Docs',
    loadChildren: () => import('./pages/devkit/devkit.routes').then(routes => routes.DEVKIT_ROUTES),
  },
  {
    path: 'example',
    component: ExamplesPage,
    loadChildren: () => import('./pages/examples/examples.routes').then(routes => routes.routes),
  },
  // redirecting to the correct exception page
  {
    path: 'e/:exception',
    redirectTo: route => getExceptionCodePageUrl(route.params['exception']) ?? '/404',
  },
  // special pages
  { path: '404', component: NotFoundPage, title: 'Page Not Found :: Ardium UI Docs' },
  { path: '**', redirectTo: '/404' },
];
