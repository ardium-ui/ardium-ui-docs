import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ArdiumEscapeHTMLModule } from "@ardium-ui/devkit";

@Component({
  selector: 'escape-html-example',
  templateUrl: './escape-html-example.html',
  styleUrl: './escape-html-example.scss',
  standalone: true,
  imports: [ArdiumEscapeHTMLModule, FormsModule],
})
export class EscapeHtmlExample {
  readonly inputValue = signal<string>('How would <b>this</b> text be displayed?');
}