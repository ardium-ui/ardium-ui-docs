import { Routes } from '@angular/router';
import { createPageRoute } from 'src/app/utils/routes';
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
import { HttpServiceApiData } from './pages/http-service/api-data';
import { HttpServiceExceptionsData } from './pages/http-service/exceptions-data';
import { HttpServicePage } from './pages/http-service/http-service.page';
import { InfiniteScrollApiData } from './pages/infinite-scroll/api-data';
import { InfiniteScrollExceptionsData } from './pages/infinite-scroll/exceptions-data';
import { InfiniteScrollPage } from './pages/infinite-scroll/infinite-scroll.page';
import { KeyboardServiceApiData } from './pages/keyboard-service/api-data';
import { KeyboardServiceExceptionsData } from './pages/keyboard-service/exceptions-data';
import { KeyboardServicePage } from './pages/keyboard-service/keyboard-service.page';
import { RelativePosApiData } from './pages/relative-pos/api-data';
import { RelativePosExceptionsData } from './pages/relative-pos/exceptions-data';
import { RelativePosPage } from './pages/relative-pos/relative-pos.page';
import { ViewportObserverApiData } from './pages/viewport-observer/api-data';
import { ViewportObserverExceptionsData } from './pages/viewport-observer/exceptions-data';
import { ViewportObserverPage } from './pages/viewport-observer/viewport-observer.page';

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
  // createUnderConstruction(
  //   'find-functions',
  //   'Find functions',
  //   'Set of functions for finding best suggestions and autocompletes',
  //   true
  // ),
  createPageRoute('hold', 'Hold', 'Directive that fires an event when user holds down a click', HoldPage, HoldApiData),
  createPageRoute(
    'http-service',
    'HTTP Service',
    'Extension of HTTP Client with support for default options',
    HttpServicePage,
    HttpServiceApiData,
    HttpServiceExceptionsData
  ),
  createPageRoute(
    'infinite-scroll',
    'Infinite scroll',
    'Directive for building infinite scroll containers',
    InfiniteScrollPage,
    InfiniteScrollApiData,
    InfiniteScrollExceptionsData
  ),
  createPageRoute(
    'keyboard-service',
    'Keyboard service',
    'Service for detecting key presses and keyboard shortcuts',
    KeyboardServicePage,
    KeyboardServiceApiData,
    KeyboardServiceExceptionsData
  ),
  createPageRoute(
    'relative-pos',
    'Relative pos',
    'Get click position relative to an element',
    RelativePosPage,
    RelativePosApiData,
    RelativePosExceptionsData
  ),
  createPageRoute(
    'viewport-observer',
    'Viewport observer',
    "Observe elements' positions relative to the viewport",
    ViewportObserverPage,
    ViewportObserverApiData,
    ViewportObserverExceptionsData
  ),
];

export const DEVKIT_ROUTES: Routes = [
  { path: '', component: DevkitHomePage, title: 'Devkit :: Ardium UI Docs' },
  ...devkitRouteData().map(v => ({ ...v, title: `${v.name} :: Ardium UI Docs` })),
];
