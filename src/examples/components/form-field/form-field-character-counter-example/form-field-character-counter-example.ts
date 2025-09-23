import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArdiumFormFieldModule, ArdiumInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'form-field-character-counter-example',
  templateUrl: './form-field-character-counter-example.html',
  styleUrl: './form-field-character-counter-example.scss',
  standalone: true,
  imports: [ArdiumFormFieldModule, ArdiumInputModule, ReactiveFormsModule],
})
export class FormFieldCharacterCounterExample {
  readonly passportControl = new FormControl<string>('', [Validators.pattern(/^[A-Z\d]{9}$/i)]);
}
