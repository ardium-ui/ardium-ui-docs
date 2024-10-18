import { Routes } from '@angular/router';
import { createUnderConstruction } from 'src/app/utils/routes';
import { DevkitHomePage } from './pages/home/home.page';

export const devkitRouteData = () => [
  createUnderConstruction('coercion', 'Coercion', 'foo', true),
];

export const DEVKIT_ROUTES: Routes = [
  { path: '', component: DevkitHomePage, title: 'Devkit :: Ardium UI Docs' },
  ...devkitRouteData().map(v => ({ ...v, title: `${v.name} :: Ardium UI Docs` })),
];
