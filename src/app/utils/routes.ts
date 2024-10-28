import { Type } from '@angular/core';
import { Route } from '@angular/router';
import { ApiPageComponent, ApiPageData } from '../components/api-page';
import { ExceptionsPageComponent } from '../components/exceptions-page/exceptions-page.component';
import { ExceptionsPageData } from '../components/exceptions-page/exceptions-page.types';
import { CommonPage } from '../pages/common/common.page';
import { UnderConstructionPage } from '../pages/under-construction/under-construction.page';

export function createPageRoute<T>(
  path: string,
  name: string,
  desc: string,
  page: Type<T>,
  apiData: ApiPageData,
  exceptionsData?: ExceptionsPageData,
  img?: string
): Route & { name: string; desc: string; img?: string } {
  if (!exceptionsData)
    exceptionsData = {
      name,
    };
  return {
    path,
    name,
    desc,
    img,
    component: CommonPage,
    children: [
      { path: 'overview', component: page },
      { path: 'api', component: ApiPageComponent, data: apiData },
      { path: 'exceptions', component: ExceptionsPageComponent, data: exceptionsData },
      { path: '**', redirectTo: 'overview' },
    ],
  };
}

export function createUnderConstruction(
  path: string,
  name: string,
  desc: string,
  noImg: boolean = false
): Route & { name: string; desc: string; img?: string } {
  return {
    path,
    name,
    desc,
    img: noImg ? undefined : 'assets/placeholder.jpg',
    component: UnderConstructionPage,
  };
}
