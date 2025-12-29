import { Type } from '@angular/core';
import { Route } from '@angular/router';
import { ApiPageComponent, ApiPageData } from '../components/api-page';
import { ExceptionsPageComponent } from '../components/exceptions-page/exceptions-page.component';
import { ExceptionsPageData } from '../components/exceptions-page/exceptions-page.types';
import { StylingPageComponent, StylingPageData } from '../components/styling-page';
import { CommonPage } from '../pages/common/common.page';
import { UnderConstructionPage } from '../pages/under-construction/under-construction.page';

export const GroupName = {
  DataDisplay: 'Data Display',
  Buttons: 'Buttons',
  Layout: 'Layout',
  FormElements: 'Form Elements',
  Popups: 'Popups',
  Feedback: 'Feedback',
  Stars: 'Stars',
  CustomSignals: 'Custom Signals',
} as const;
export type GroupName = typeof GroupName[keyof typeof GroupName];

export function createPageRoute<T>(
  path: string,
  name: string,
  desc: string,
  page: Type<T>,
  apiData: ApiPageData,
  exceptionsData?: ExceptionsPageData,
  stylingData?: StylingPageData,
  img?: string,
  groupName?: GroupName
): Route & { name: string; desc: string; img?: string; groupName?: GroupName } {
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
      { path: 'styling', component: StylingPageComponent, data: stylingData },
      { path: 'exceptions', component: ExceptionsPageComponent, data: exceptionsData },
      { path: '**', redirectTo: 'overview' },
    ],
  };
}

export function createUnderConstruction(
  path: string,
  name: string,
  desc: string,
  groupName: GroupName | undefined
): Route & { name: string; desc: string; img?: string; groupName?: GroupName } {
  return {
    path,
    name,
    desc,
    groupName,
    img: 'assets/placeholder.jpg',
    component: UnderConstructionPage,
  };
}
