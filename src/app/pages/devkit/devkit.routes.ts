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
  ),
  createUnderConstruction('custom-signals', 'Custom signals', 'Set of custom, specialized signals'),
  createUnderConstruction('dom-boxes', 'DOM Boxes', 'Functions similar to getClientBoundingRect'),
  createUnderConstruction('escape-html', 'Escape HTML', 'Pipe and function for escaping HTML and XML code'),
  createUnderConstruction(
    'file-system',
    'File System',
    'Powerful service for downloading files and asking the user to upload files'
  ),
  createUnderConstruction('file-pipes', 'File pipes', 'Set of pipes for displaying information about a File'),
  createUnderConstruction(
    'find-functions',
    'Find functions',
    'Set of functions for finding best suggestions and autocompletes'
  ),
  createUnderConstruction('hold', 'Hold', 'Directive that fires an event when user holds down a click'),
  createUnderConstruction('infinite-scroll', 'Infinite scroll', 'Directive for building infinite scroll containers'),
  createUnderConstruction('keyboard-shortcut', 'Keyboard', 'Service for detecting key presses and keyboard shortcuts'),
  createUnderConstruction('relative-pos', 'Relative pos', 'Get click position relative to an element'),
  createUnderConstruction(
    'viewport-observer',
    'Viewport observer',
    "Observe elements' positions relative to the viewport"
  ),
];

export const DEVKIT_ROUTES: Routes = [
  { path: '', component: DevkitHomePage, title: 'Devkit :: Ardium UI Docs' },
  ...devkitRouteData().map(v => ({ ...v, title: `${v.name} :: Ardium UI Docs` })),
];
