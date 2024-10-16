import { Route, Routes } from '@angular/router';
import { createComponentPageRoute, createUnderConstruction } from 'src/app/utils/routes';
import { ComponentsHomePage } from './pages/home/home.page';
import { KbdApiData } from './pages/kbd/api-data';
import { KbdPage } from './pages/kbd/kbd.page';

export const componentRouteData: (Route & { name: string })[] = [
  createComponentPageRoute('kbd', 'KBD', KbdPage, KbdApiData),
  createUnderConstruction('badge', 'Badge'),
  createUnderConstruction('buttons', 'Buttons'),
  createUnderConstruction('card', 'Card'),
  createUnderConstruction('checkbox', 'Checkbox'),
  createUnderConstruction('checkbox-list', 'Checkbox List'),
  createUnderConstruction('chips', 'Chips'),
  createUnderConstruction('dialogs', 'Dialogs'),
  createUnderConstruction('divider', 'Divider'),
  createUnderConstruction('file-input', 'File Input'),
  createUnderConstruction('form-field-frame', 'Form Field Frame'),
  createUnderConstruction('icon', 'Icon'),
  createUnderConstruction('input', 'Input'),
  createUnderConstruction('simple-input', 'Simple Input'),
  createUnderConstruction('number-input', 'Number Input'),
  createUnderConstruction('hex-input', 'Hex Input'),
  createUnderConstruction('password-input', 'Password Input'),
  createUnderConstruction('progress-bar', 'Progress Bar'),
  createUnderConstruction('progress-circle', 'Progress Circle'),
  createUnderConstruction('radio', 'Radio'),
  createUnderConstruction('segment', 'Segment'),
  createUnderConstruction('select', 'Select'),
  createUnderConstruction('slide-toggle', 'Slide Toggle'),
  createUnderConstruction('slider', 'Slider'),
  createUnderConstruction('snackbar', 'Snackbar'),
  createUnderConstruction('spinner', 'Spinner'),
  createUnderConstruction('star-display', 'Star Display'),
  createUnderConstruction('star-button', 'Star Button'),
  createUnderConstruction('statebox', 'Statebox'),
  createUnderConstruction('tabber', 'Tabber'),
  createUnderConstruction('table', 'Table'),
];

export const COMPONENT_ROUTES: Routes = [
  { path: '', component: ComponentsHomePage, title: 'UI Components :: Ardium UI Docs' },
  ...componentRouteData.map(v => ({ ...v, title: `${v.name} :: Ardium UI Docs` })),
];
