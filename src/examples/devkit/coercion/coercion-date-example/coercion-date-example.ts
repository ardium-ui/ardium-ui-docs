import { Component } from '@angular/core';
import { MyCalendarComponent } from './my-calendar.component';

@Component({
  selector: 'coercion-date-example',
  templateUrl: './coercion-date-example.html',
  styleUrl: './coercion-date-example.scss',
  standalone: true,
  imports: [MyCalendarComponent],
})
export class CoercionDateExample {}
