import { Routes } from '@angular/router';
import { createPageRoute, createUnderConstruction } from 'src/app/utils/routes';
import { ButtonApiData } from './pages/button/api-data';
import { ButtonPage } from './pages/button/button.page';
import { ComponentsHomePage } from './pages/home/home.page';
import { KbdApiData } from './pages/kbd/api-data';
import { KbdExceptionsData } from './pages/kbd/exceptions-data';
import { KbdPage } from './pages/kbd/kbd.page';

export const componentRouteData = () => [
  createPageRoute(
    'kbd',
    'KBD',
    'Presents a keyboard key in an accessible way.',
    KbdPage,
    KbdApiData,
    KbdExceptionsData
  ),
  createUnderConstruction('badge', 'Badge', 'A small indicator that can be overlaid on another object.'),
  createPageRoute('buttons', 'Buttons', 'A set of buttons with a wide range of variants and styles.', ButtonPage, ButtonApiData),
  createUnderConstruction('card', 'Card', 'A styled container for pieces of itemized content.'),
  createUnderConstruction('checkbox', 'Checkbox', 'Handles boolean input with an optional indeterminate mode.'),
  createUnderConstruction('checkbox-list', 'Checkbox List', 'Allows the user to select multiple items from a list.'),
  createUnderConstruction('chips', 'Chips', 'Presents a piece of text as a small, contained element.'),
  createUnderConstruction('dialogs', 'Dialogs', 'Configurable modal that displays dynamic content.'),
  createUnderConstruction('divider', 'Divider', 'A horizontal or vertical visual divider.'),
  createUnderConstruction('file-input', 'File Input', 'A form component for uploading files.'),
  createUnderConstruction(
    'form-field-frame',
    'Form Field Frame',
    'Wraps input fields so they are displayed consistently.'
  ),
  createUnderConstruction('icon', 'Icon', 'Renders a specified Material Icon.'),
  createUnderConstruction('simple-input', 'Simple Input', 'Simple version of the more advanced text input.'),
  createUnderConstruction('input', 'Input', 'Text input with autocomplete and suggestion options.'),
  createUnderConstruction('number-input', 'Number Input', 'Text field for inputing numbers in a handy way.'),
  createUnderConstruction('hex-input', 'Hex Input', 'Text field for inputing hexadecimal strings.'),
  createUnderConstruction('password-input', 'Password Input', 'Text field for inputing passwords.'),
  createUnderConstruction('progress-bar', 'Progress Bar', 'A linear progress or state indicator.'),
  createUnderConstruction('progress-circle', 'Progress Circle', 'A circular progress indicator.'),
  createUnderConstruction('radio', 'Radio', 'Allows user to select one option from a group.'),
  createUnderConstruction('segment', 'Segment', 'A group of on/off toggles.'),
  createUnderConstruction('select', 'Select', 'Allows user to select one or more options using a dropdown.'),
  createUnderConstruction('slide-toggle', 'Slide Toggle', 'Captures boolean values as a clickable switch.'),
  createUnderConstruction('slider', 'Slider', 'Allows user to input a value by dragging along a slider.'),
  createUnderConstruction('snackbar', 'Snackbar', 'Displays short messages as uninvasive alerts.'),
  createUnderConstruction('spinner', 'Spinner', 'Represents loading activity.'),
  createUnderConstruction('star-display', 'Star Display', 'Shows an array of star icons.'),
  createUnderConstruction('star-button', 'Star Button', 'Clickable button with a star icon for inputing ratings.'),
  createUnderConstruction('statebox', 'Statebox', 'Extension of a checkbox that allows custom states and values.'),
  createUnderConstruction('tabber', 'Tabber', 'Switches between multiple content tabs.'),
  createUnderConstruction('table', 'Table', 'Shows data in an organized way.'),
];

export const COMPONENT_ROUTES: Routes = [
  { path: '', component: ComponentsHomePage, title: 'UI Components :: Ardium UI Docs' },
  ...componentRouteData().map(v => ({ ...v, title: `${v.name} :: Ardium UI Docs` })),
];
