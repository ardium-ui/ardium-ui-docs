import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArdiumFormFieldModule, ArdiumInputModule, provideErrorMap } from '@ardium-ui/ui';

@Component({
  selector: 'form-field-auto-error-example',
  templateUrl: './form-field-auto-error-example.html',
  styleUrl: './form-field-auto-error-example.scss',
  standalone: true,
  imports: [ArdiumFormFieldModule, ArdiumInputModule, ReactiveFormsModule],
  providers: [
    provideErrorMap({
      required: 'This field is required.',
      minlength: (errorData) => `Enter at least ${errorData.requiredLength} characters.`,
      maxlength: (errorData) => `Enter no more than ${errorData.requiredLength} characters.`,
      pattern: 'Only letters and spaces are allowed.',
    })
  ]
})
export class FormFieldAutoErrorExample {
  readonly nameControl = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(64),
      Validators.pattern(/^[a-zA-Z\s]+$/),
    ],
  });
}
