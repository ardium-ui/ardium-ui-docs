import { Routes } from '@angular/router';
import { createPageRoute } from 'src/app/utils/routes';
import { ClickOutisdeApiData } from './pages/click-outside/api-data';
import { ClickOutsidePage } from './pages/click-outside/click-outside.page';
import { CoercionApiData } from './pages/coercion/api-data';
import { CoercionPage } from './pages/coercion/coercion.page';
import { ArraySignalApiData } from './pages/custom-signals/array-signal/api-data';
import { ArraySignalPage } from './pages/custom-signals/array-signal/array-signal.page';
import { CounterSignalApiData } from './pages/custom-signals/counter-signal/api-data';
import { CounterSignalPage } from './pages/custom-signals/counter-signal/counter-signal.page';
import { DebouncedSignalApiData } from './pages/custom-signals/debounced-signal/api-data';
import { DebouncedSignalPage } from './pages/custom-signals/debounced-signal/debounced-signal.page';
import { MapSignalApiData } from './pages/custom-signals/map-signal/api-data';
import { MapSignalPage } from './pages/custom-signals/map-signal/map-signal.page';
import { PersistentSignalApiData } from './pages/custom-signals/persistent-signal/api-data';
import { PersistentSignalExceptionsData } from './pages/custom-signals/persistent-signal/exceptions-data';
import { PersistentSignalPage } from './pages/custom-signals/persistent-signal/persistent-signal.page';
import { QueryParamSignalApiData } from './pages/custom-signals/query-param-signal/api-data';
import { QueryParamSignalExceptionsData } from './pages/custom-signals/query-param-signal/exceptions-data';
import { QueryParamSignalPage } from './pages/custom-signals/query-param-signal/query-param-signal.page';
import { QueueSignalApiData } from './pages/custom-signals/queue-signal/api-data';
import { QueueSignalPage } from './pages/custom-signals/queue-signal/queue-signal.page';
import { SetSignalApiData } from './pages/custom-signals/set-signal/api-data';
import { SetSignalPage } from './pages/custom-signals/set-signal/set-signal.page';
import { StackSignalApiData } from './pages/custom-signals/stack-signal/api-data';
import { StackSignalPage } from './pages/custom-signals/stack-signal/stack-signal.page';
import { ThrottledSignalApiData } from './pages/custom-signals/throttled-signal/api-data';
import { ThrottledSignalPage } from './pages/custom-signals/throttled-signal/throttled-signal.page';
import { TupleSignalApiData } from './pages/custom-signals/tuple-signal/api-data';
import { TupleSignalPage } from './pages/custom-signals/tuple-signal/tuple-signal.page';
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
import { ValidatorsApiData } from './pages/validators/api-data';
import { ValidatorsPage } from './pages/validators/validators.page';
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
    'array-signal',
    'Array Signal',
    'Signal for managing array values.',
    ArraySignalPage,
    ArraySignalApiData,
    undefined,
    undefined,
    undefined,
    'Custom Signals'
  ),
  createPageRoute(
    'counter-signal',
    'Counter Signal',
    'Signal for incrementing, decrementing, and resetting numeric values.',
    CounterSignalPage,
    CounterSignalApiData,
    undefined,
    undefined,
    undefined,
    'Custom Signals'
  ),
  createPageRoute(
    'map-signal',
    'Map Signal',
    'Signal for working with key-value pairs using the Map API.',
    MapSignalPage,
    MapSignalApiData,
    undefined,
    undefined,
    undefined,
    'Custom Signals'
  ),
  createPageRoute(
    'queue-signal',
    'Queue Signal',
    'Signal for managing a FIFO queue of values.',
    QueueSignalPage,
    QueueSignalApiData,
    undefined,
    undefined,
    undefined,
    'Custom Signals'
  ),
  createPageRoute(
    'stack-signal',
    'Stack Signal',
    'Signal for managing a LIFO stack of values.',
    StackSignalPage,
    StackSignalApiData,
    undefined,
    undefined,
    undefined,
    'Custom Signals'
  ),
  createPageRoute(
    'set-signal',
    'Set Signal',
    'Signal for managing unique values using the Set API.',
    SetSignalPage,
    SetSignalApiData,
    undefined,
    undefined,
    undefined,
    'Custom Signals'
  ),
  createPageRoute(
    'tuple-signal',
    'Tuple Signal',
    'Signal for managing fixed-length tuples with typed access.',
    TupleSignalPage,
    TupleSignalApiData,
    undefined,
    undefined,
    undefined,
    'Custom Signals'
  ),
  createPageRoute(
    'persistent-signal',
    'Persistent Signal',
    'Signal synced with local storage, session storage, or cookies',
    PersistentSignalPage,
    PersistentSignalApiData,
    PersistentSignalExceptionsData,
    undefined,
    undefined,
    'Custom Signals'
  ),
  createPageRoute(
    'query-param-signal',
    'Query Param Signal',
    'Signal synced with a URL query parameter',
    QueryParamSignalPage,
    QueryParamSignalApiData,
    QueryParamSignalExceptionsData,
    undefined,
    undefined,
    'Custom Signals'
  ),
  createPageRoute(
    'debounced-signal',
    'Debounced Signal',
    'Signal that delays updates to reduce frequency of changes',
    DebouncedSignalPage,
    DebouncedSignalApiData,
    undefined,
    undefined,
    undefined,
    'Custom Signals'
  ),
  createPageRoute(
    'throttled-signal',
    'Throttled Signal',
    'Signal that limits updates to one per throttle interval',
    ThrottledSignalPage,
    ThrottledSignalApiData,
    undefined,
    undefined,
    undefined,
    'Custom Signals'
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
    'validators',
    'Extended validators',
    'Set of additional validators for Angular forms',
    ValidatorsPage,
    ValidatorsApiData
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
  ...devkitRouteData().map(v => ({
    ...v,
    title: `${v.name} :: Ardium UI Docs`,
    path: v.path,
  })),
];
