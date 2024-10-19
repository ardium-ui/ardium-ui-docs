import { Routes } from '@angular/router';
import { createPageRoute, createUnderConstruction } from 'src/app/utils/routes';
import { CoercionApiData } from './pages/coercion/api-data';
import { CoercionPage } from './pages/coercion/coercion.page';
import { DevkitHomePage } from './pages/home/home.page';

export const devkitRouteData = () => [
  createPageRoute(
    'coercion',
    'Coercion',
    'Utility functions for coercing inputs into specific types',
    CoercionPage,
    CoercionApiData
  ),
  createUnderConstruction(
    'click-outside',
    'Click outside',
    'Directive that fires an event when clicked outside the element'
  , true),
  createUnderConstruction('custom-signals', 'Custom signals', 'Set of custom, specialized signals', true),
  createUnderConstruction('dom-boxes', 'DOM Boxes', 'Functions similar to getClientBoundingRect', true),
  createUnderConstruction('escape-html', 'Escape HTML', 'Pipe and function for escaping HTML and XML code', true),
  createUnderConstruction(
    'file-system',
    'File System',
    'Service for downloading files and asking the user to upload files'
  , true),
  createUnderConstruction('file-pipes', 'File pipes', 'Set of pipes for displaying information about a File', true),
  createUnderConstruction(
    'find-functions',
    'Find functions',
    'Set of functions for finding best suggestions and autocompletes'
  , true),
  createUnderConstruction('hold', 'Hold', 'Directive that fires an event when user holds down a click', true),
  createUnderConstruction('infinite-scroll', 'Infinite scroll', 'Directive for building infinite scroll containers', true),
  createUnderConstruction('keyboard-shortcut', 'Keyboard service', 'Service for detecting key presses and keyboard shortcuts', true),
  createUnderConstruction('relative-pos', 'Relative pos', 'Get click position relative to an element', true),
  createUnderConstruction(
    'viewport-observer',
    'Viewport observer',
    "Observe elements' positions relative to the viewport"
  , true),
];

export const DEVKIT_ROUTES: Routes = [
  { path: '', component: DevkitHomePage, title: 'Devkit :: Ardium UI Docs' },
  ...devkitRouteData().map(v => ({ ...v, title: `${v.name} :: Ardium UI Docs` })),
];
