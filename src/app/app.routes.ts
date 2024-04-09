import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { ComponentsPage } from './pages/components/components.page';
import { KbdPage } from './pages/kbd/kbd.page';

export const routes: Routes = [
  // basic pages
  { path: '', component: HomePage, title: 'Ardium UI Docs' },
  { path: 'components', component: ComponentsPage, title: 'Ardium UI Docs' },
  // component pages
  { path: 'components/kbd', component: KbdPage, title: 'Ardium UI Docs :: kbd' },
  // special pages
  { path: '404', component: NotFoundPage, title: 'Ardium UI Docs :: Page Not Found' },
  { path: '**', redirectTo: '/404' },
];
