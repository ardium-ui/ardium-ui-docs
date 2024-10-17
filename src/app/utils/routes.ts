import { Type } from '@angular/core';
import { Route } from '@angular/router';
import { ApiPageComponent, ApiPageData } from '../components/api-page';
import { CommonPage } from '../pages/components/pages/common/common.page';
import { UnderConstructionPage } from '../pages/under-construction/under-construction.page';

export function createComponentPageRoute<T>(
  path: string,
  name: string,
  desc: string,
  page: Type<T>,
  apiData: ApiPageData,
  img: string
): Route & { name: string; desc: string; img: string } {
  return {
    path,
    name,
    desc,
    img,
    component: CommonPage,
    children: [
      { path: 'overview', component: page },
      { path: 'api', component: ApiPageComponent, data: apiData },
      { path: '**', redirectTo: 'overview' },
    ],
  };
}

export function createUnderConstruction(path: string, name: string, desc: string): Route & { name: string; desc: string; img: string } {
  return {
    path,
    name,
    desc,
    img: 'placeholder.png',
    component: UnderConstructionPage,
  };
}
