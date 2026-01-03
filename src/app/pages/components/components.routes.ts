import { Routes } from '@angular/router';
import { createPageRoute, createUnderConstruction } from 'src/app/utils/routes';
import { ButtonApiData } from './pages/button/api-data';
import { ButtonPage } from './pages/button/button.page';
import { DialogApiData } from './pages/dialog/api-data';
import { DialogPage } from './pages/dialog/dialog.page';
import { FormFieldApiData } from './pages/form-field/api-data';
import { FormFieldExceptionsData } from './pages/form-field/exceptions-data';
import { FormFieldPage } from './pages/form-field/form-field.page';
import { ComponentsHomePage } from './pages/home/home.page';
import { KbdApiData } from './pages/kbd/api-data';
import { KbdExceptionsData } from './pages/kbd/exceptions-data';
import { KbdPage } from './pages/kbd/kbd.page';
import { sliderApiData } from './pages/slider/api-data';
import { sliderExceptionsData } from './pages/slider/exceptions-data';
import { SliderPage } from './pages/slider/slider.page';
import { sliderStylingData } from './pages/slider/styling-data';
import { SpinnerApiData } from './pages/spinner/api-data';
import { SpinnerPage } from './pages/spinner/spinner.page';
import { tabberApiData } from './pages/tabber/api-data';
import { tabberExceptionsData } from './pages/tabber/exceptions-data';
import { tabberStylingData } from './pages/tabber/styling-data';
import { TabberPage } from './pages/tabber/tabber.page';

export const componentRouteData = () => [
  createPageRoute(
    'kbd',
    'KBD',
    'Presents a keyboard key in an accessible way.',
    KbdPage,
    KbdApiData,
    KbdExceptionsData,
    undefined,
    'assets/kbd.png',
    'Data Display'
  ),
  createUnderConstruction(
    'badge',
    'Badge',
    'A small indicator that can be overlaid on another object.',
    'Data Display'
  ),
  createPageRoute(
    'button',
    'Button',
    'A set of buttons with a wide range of variants and styles.',
    ButtonPage,
    ButtonApiData,
    undefined,
    undefined,
    'assets/button.png',
    'Buttons'
  ),
  createUnderConstruction(
    'fab',
    'Floating Action Button',
    'Performs the primary or most common action on the screen.',
    'Buttons'
  ),
  createUnderConstruction('icon-button', 'Icon Button', 'For creating clickable icons.', 'Buttons'),
  createUnderConstruction('card', 'Card', 'A styled container for pieces of itemized content.', 'Layout'),
  createUnderConstruction(
    'checkbox',
    'Checkbox',
    'Handles boolean input with an optional indeterminate mode.',
    'Form Elements'
  ),
  createUnderConstruction(
    'checkbox-list',
    'Checkbox List',
    'Allows the user to select multiple items from a list.',
    'Form Elements'
  ),
  createUnderConstruction('chips', 'Chips', 'Presents a piece of text as a small, contained element.', 'Data Display'),
  createUnderConstruction(
    'color-display',
    'Color Display',
    'Presents a color code with a small preview.',
    'Data Display'
  ),
  createPageRoute(
    'dialogs',
    'Dialogs',
    'Configurable modal that displays dynamic content.',
    DialogPage,
    DialogApiData,
    undefined,
    undefined,
    'assets/dialogs.png',
    'Popups',
  ),
  createUnderConstruction('divider', 'Divider', 'A horizontal or vertical visual divider.', 'Layout'),
  createUnderConstruction('file-input', 'File Input', 'A form component for uploading files.', 'Form Elements'),
  createPageRoute(
    'form-field',
    'Form Field',
    'Places labels, hints, and errors around an input field.',
    FormFieldPage,
    FormFieldApiData,
    FormFieldExceptionsData,
    undefined,
    'assets/form-field.png',
    'Form Elements'
  ),
  createUnderConstruction(
    'form-field-frame',
    'Form Field Frame',
    'Wraps input fields so they are displayed consistently.',
    'Form Elements'
  ),
  createUnderConstruction('icon', 'Icon', 'Renders a specified Material Icon.', 'Data Display'),
  createUnderConstruction(
    'simple-input',
    'Simple Input',
    'Simple version of the more advanced text input.',
    'Form Elements'
  ),
  createUnderConstruction('input', 'Input', 'Text input with autocomplete and suggestion options.', 'Form Elements'),
  createUnderConstruction(
    'number-input',
    'Number Input',
    'Form field for inputing numbers in a handy way.',
    'Form Elements'
  ),
  createUnderConstruction('hex-input', 'Hex Input', 'Text field for inputing hexadecimal strings.', 'Form Elements'),
  createUnderConstruction('date-input', 'Date Input', 'Text field and calendar combined into one.', 'Form Elements'),
  createUnderConstruction('password-input', 'Password Input', 'Text field for inputing passwords.', 'Form Elements'),
  createUnderConstruction('progress-bar', 'Progress Bar', 'A linear progress or state indicator.', 'Feedback'),
  createUnderConstruction('progress-circle', 'Progress Circle', 'A circular progress indicator.', 'Feedback'),
  createUnderConstruction('radio', 'Radio', 'Allows user to select one option from a group.', 'Form Elements'),
  createUnderConstruction('segment', 'Segment', 'A group of on/off toggles.', 'Form Elements'),
  createUnderConstruction(
    'select',
    'Select',
    'Allows user to select one or more options using a dropdown.',
    'Form Elements'
  ),
  createUnderConstruction(
    'slide-toggle',
    'Slide Toggle',
    'Captures boolean values as a clickable switch.',
    'Form Elements'
  ),
  createPageRoute(
    'slider',
    'Slider',
    'Allows user to input a value by dragging along a slider.',
    SliderPage,
    sliderApiData,
    sliderExceptionsData,
    sliderStylingData,
    'assets/slider.png',
    'Form Elements'
  ),
  createUnderConstruction('snackbar', 'Snackbar', 'Displays short messages as uninvasive alerts.', 'Popups'),
  createPageRoute(
    'spinner',
    'Spinner',
    'Represents loading activity.',
    SpinnerPage,
    SpinnerApiData,
    undefined,
    undefined,
    'assets/spinner.png',
    'Feedback'
  ),
  createUnderConstruction('star', 'Star', 'Shows a star icon in one of three states', 'Stars'),
  createUnderConstruction('rating-display', 'Rating Display', 'Shows ratings as an array of star icons.', 'Stars'),
  createUnderConstruction(
    'star-button',
    'Star Button',
    'Clickable button with a star icon for inputing ratings.',
    'Stars'
  ),
  createUnderConstruction('rating-input', 'Rating Input', 'For inputting ratings in stars', 'Stars'),
  createUnderConstruction(
    'statebox',
    'Statebox',
    'Extension of a checkbox that allows custom states and values.',
    'Form Elements'
  ),
  createUnderConstruction(
    'text-list',
    'Text List',
    'Concatenates strings into text-based inline lists.',
    'Data Display'
  ),
  createPageRoute(
    'tabber',
    'Tabber',
    'Switches between multiple content tabs.',
    TabberPage,
    tabberApiData,
    tabberExceptionsData,
    tabberStylingData,
    'assets/tabber.png',
    'Layout'
  ),
  createUnderConstruction('table', 'Table', 'Shows data in an organized way.', 'Data Display'),
];

export const COMPONENT_ROUTES: Routes = [
  { path: '', component: ComponentsHomePage, title: 'UI Components :: Ardium UI Docs' },
  ...componentRouteData().map(v => ({ ...v, title: `${v.name} :: Ardium UI Docs` })),
];
