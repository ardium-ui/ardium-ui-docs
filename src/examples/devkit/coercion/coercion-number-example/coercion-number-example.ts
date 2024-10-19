import { Component } from '@angular/core';
import { MyButtonComponent } from './my-button.component';

@Component({
  selector: 'coercion-number-example',
  templateUrl: './coercion-number-example.html',
  styleUrl: './coercion-number-example.scss',
  standalone: true,
  imports: [MyButtonComponent],
})
export class CoercionNumberExample {}
