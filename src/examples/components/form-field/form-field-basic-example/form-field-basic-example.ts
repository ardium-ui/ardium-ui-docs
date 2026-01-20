import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArdiumFormFieldModule, ArdiumInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'form-field-basic-example',
  templateUrl: './form-field-basic-example.html',
  styleUrl: './form-field-basic-example.scss',
  standalone: true,
  imports: [ArdiumFormFieldModule, ArdiumInputModule, ReactiveFormsModule],
})
export class FormFieldBasicExample {
  readonly nameControl = new FormControl<string>('', [Validators.pattern(/^[A-Z]{2,} [A-Z]{2,}$/i)]);
}
