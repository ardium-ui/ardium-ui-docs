import { Component } from '@angular/core';
import { ArdiumFormFieldModule, ArdiumInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'form-field-required-optional-labels-example',
  templateUrl: './form-field-required-optional-labels-example.html',
  styleUrl: './form-field-required-optional-labels-example.scss',
  standalone: true,
  imports: [ArdiumFormFieldModule, ArdiumInputModule],
})
export class FormFieldRequiredOptionalLabelsExample {
  
}
