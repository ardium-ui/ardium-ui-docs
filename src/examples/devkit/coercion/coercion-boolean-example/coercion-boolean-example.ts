import { Component } from "@angular/core";
import { MyButtonComponent } from "./my-button.component";

@Component({
  selector: 'coercion-boolean-example',
  templateUrl: './coercion-boolean-example.html',
  styleUrl: './coercion-boolean-example.scss',
  standalone: true,
  imports: [MyButtonComponent],
})
export class CoercionBooleanExample {}