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
  img?: string,
  groupName?: string
): Route & { name: string; desc: string; img?: string; groupName?: string } {
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
    groupName,
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
  groupName: string | undefined
): Route & { name: string; desc: string; img?: string; groupName?: string } {
  return {
    path,
    name,
    desc,
    groupName,
    img: 'assets/placeholder.jpg',
    component: UnderConstructionPage,
  };
}
