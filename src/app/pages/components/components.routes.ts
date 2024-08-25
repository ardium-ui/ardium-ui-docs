import { Routes } from '@angular/router';
import { ComponentsHomePage } from './pages/home/home.page';
import { KbdPage } from './pages/kbd/kbd.page';

export const COMPONENT_ROUTES: Routes = [
  { path: '', component: ComponentsHomePage, title: 'UI Components :: Ardium UI Docs' },
  { path: 'kbd', component: KbdPage, title: 'kbd :: Ardium UI Docs' },
];
