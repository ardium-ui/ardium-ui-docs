import { Routes } from '@angular/router';
import { createPageRoute, createUnderConstruction } from 'src/app/utils/routes';
import { ClickOutisdeApiData } from './pages/click-outside/api-data';
import { ClickOutsidePage } from './pages/click-outside/click-outside.page';
import { CoercionApiData } from './pages/coercion/api-data';
import { CoercionPage } from './pages/coercion/coercion.page';
import { CustomSignalsApiData } from './pages/custom-signals/api-data';
import { CustomSignalsPage } from './pages/custom-signals/custom-signals.page';
import { CustomSignalsExceptionsData } from './pages/custom-signals/exceptions-data';
import { DomBoxesApiData } from './pages/dom-boxes/api-data';
import { DOMBoxesPage } from './pages/dom-boxes/dom-boxes.page';
import { EscapeHtmlApiData } from './pages/escape-html/api-data';
import { EscapeHtmlPage } from './pages/escape-html/escape-html.page';
import { FilePipesApiData } from './pages/file-pipes/api-data';
import { FilePipesPage } from './pages/file-pipes/file-pipes.page';
import { FileSystemApiData } from './pages/file-system/api-data';
import { FileSystemExceptionsData } from './pages/file-system/exceptions-data';
import { FileSystemPage } from './pages/file-system/file-system.page';
import { HoldApiData } from './pages/hold/api-data';
import { HoldPage } from './pages/hold/hold.page';
import { DevkitHomePage } from './pages/home/home.page';

export const devkitRouteData = () => [
  createPageRoute(
    'coercion',
    'Coercion',
    'Utility functions for coercing inputs into specific types',
    CoercionPage,
    CoercionApiData
  ),
  createPageRoute(
    'click-outside',
    'Click outside',
    'Directive that fires an event when clicked outside an element',
    ClickOutsidePage,
    ClickOutisdeApiData
  ),
  createPageRoute(
    'custom-signals',
    'Custom signals',
    'A set of custom, specialized signals',
    CustomSignalsPage,
    CustomSignalsApiData,
    CustomSignalsExceptionsData
  ),
  createPageRoute(
    'dom-boxes',
    'DOM Boxes',
    'Functions similar to getClientBoundingRect',
    DOMBoxesPage,
    DomBoxesApiData
  ),
  createPageRoute(
    'escape-html',
    'Escape HTML',
    'Pipe and function for escaping HTML and XML code',
    EscapeHtmlPage,
    EscapeHtmlApiData
  ),
  createPageRoute(
    'file-pipes',
    'File pipes',
    'Set of pipes for displaying information about a File',
    FilePipesPage,
    FilePipesApiData
  ),
  createPageRoute(
    'file-system',
    'File System',
    'Service for downloading files and asking the user to upload files',
    FileSystemPage,
    FileSystemApiData,
    FileSystemExceptionsData
  ),
  createUnderConstruction(
    'find-functions',
    'Find functions',
    'Set of functions for finding best suggestions and autocompletes',
    true
  ),
  createPageRoute('hold', 'Hold', 'Directive that fires an event when user holds down a click', HoldPage, HoldApiData),
  createUnderConstruction(
    'infinite-scroll',
    'Infinite scroll',
    'Directive for building infinite scroll containers',
    true
  ),
  createUnderConstruction(
    'keyboard-shortcut',
    'Keyboard service',
    'Service for detecting key presses and keyboard shortcuts',
    true
  ),
  createUnderConstruction('relative-pos', 'Relative pos', 'Get click position relative to an element', true),
  createUnderConstruction(
    'viewport-observer',
    'Viewport observer',
    "Observe elements' positions relative to the viewport",
    true
  ),
];

export const DEVKIT_ROUTES: Routes = [
  { path: '', component: DevkitHomePage, title: 'Devkit :: Ardium UI Docs' },
  ...devkitRouteData().map(v => ({ ...v, title: `${v.name} :: Ardium UI Docs` })),
];
