import { Component, signal } from "@angular/core";
import { ArdiumClickOutsideModule } from "@ardium-ui/devkit";

@Component({
  selector: 'click-outside-example',
  templateUrl: './click-outside-example.html',
  styleUrl: './click-outside-example.scss',
  standalone: true,
  imports: [ArdiumClickOutsideModule],
})
export class ClickOutsideExample {
  readonly insideClicks = signal<number>(0);
  readonly outsideClicks = signal<number>(0);

  onClick() {
    this.insideClicks.update(v => v + 1);
  }
  onOutsideClick() {
    this.outsideClicks.update(v => v + 1);
  }
}