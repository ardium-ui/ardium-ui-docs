import { Component, input } from '@angular/core';
import { coerceDateProperty } from '@ardium-ui/devkit';

@Component({
  selector: 'my-calendar',
  template: `The date is {{ date() }}`,
  standalone: true,
  imports: [],
})
export class MyCalendarComponent {
  readonly date = input.required<Date, any>({ transform: v => coerceDateProperty(v, new Date('')) });
}
