import { Type } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { ApiPageComponent, ApiPageData } from 'src/app/components/api-page';
import { CommonPage } from './pages/common/common.page';
import { ComponentsHomePage } from './pages/home/home.page';
import { KbdApiData } from './pages/kbd/api-data';
import { KbdPage } from './pages/kbd/kbd.page';

function _createComponentPageRoute<T>(
  path: string,
  name: string,
  page: Type<T>,
  apiData: ApiPageData
): (Route & { name: string }) {
  return {
    path,
    name,
    component: CommonPage,
    children: [
      { path: 'overview', component: page },
      { path: 'api', component: ApiPageComponent, data: apiData },
      { path: '**', redirectTo: 'overview' },
    ],
  }
}

export const componentRouteData: (Route & { name: string })[] = [
  _createComponentPageRoute('kbd', 'KBD', KbdPage, KbdApiData),
];

export const COMPONENT_ROUTES: Routes = [
  { path: '', component: ComponentsHomePage, title: 'UI Components :: Ardium UI Docs' },
  ...componentRouteData.map(v => ({ ...v, title: `${v.name} :: Ardium UI Docs` })),
];
