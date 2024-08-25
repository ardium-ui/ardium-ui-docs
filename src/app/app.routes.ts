import { Routes } from '@angular/router';
import { ComponentsPage } from './pages/components/components.page';
import { HomePage } from './pages/home/home.page';
import { NotFoundPage } from './pages/not-found/not-found.page';

export const routes: Routes = [
  // basic pages
  { path: '', component: HomePage, title: 'Ardium UI Docs' },
  {
    path: 'components',
    component: ComponentsPage,
    title: 'Ardium UI Docs',
    loadChildren: () => import('./pages/components/components.routes').then(routes => routes.COMPONENT_ROUTES),
  },
  // special pages
  { path: '404', component: NotFoundPage, title: 'Page Not Found :: Ardium UI Docs' },
  { path: '**', redirectTo: '/404' },
];
