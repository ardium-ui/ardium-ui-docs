import { Routes } from '@angular/router';
import { ComponentsHomePage } from './pages/home/home.page';
import { KbdPage } from './pages/kbd/kbd.page';

export const componentRouteData = [
  { path: 'kbd', name: 'KBD', component: KbdPage },
]

export const COMPONENT_ROUTES: Routes = [
  { path: '', component: ComponentsHomePage, title: 'UI Components :: Ardium UI Docs' },
  ...componentRouteData.map(v => ({ ...v, title: `${v.name} :: Ardium UI Docs` })),
];
