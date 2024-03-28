import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { NotFoundPage } from './pages/not-found/not-found.page';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Ardium UI Docs' },
  { path: '404', component: NotFoundPage, title: 'Ardium UI Docs :: Page Not Found' },
  { path: '**', redirectTo: '/404' },
];