import { Routes } from '@angular/router';
import { createPageRoute } from 'src/app/utils/routes';
import { CoercionApiData } from './pages/coercion/api-data';
import { CoercionPage } from './pages/coercion/coercion.page';
import { DevkitHomePage } from './pages/home/home.page';

export const devkitRouteData = () => [
  createPageRoute('coercion', 'Coercion', 'Utility functions for coercing inputs into specific types', CoercionPage, CoercionApiData),
];

export const DEVKIT_ROUTES: Routes = [
  { path: '', component: DevkitHomePage, title: 'Devkit :: Ardium UI Docs' },
  ...devkitRouteData().map(v => ({ ...v, title: `${v.name} :: Ardium UI Docs` })),
];
