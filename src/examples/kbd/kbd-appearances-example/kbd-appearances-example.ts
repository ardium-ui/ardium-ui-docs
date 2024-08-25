import { Component } from "@angular/core";
import { ArdiumKbdModule, ArdiumKbdShortcutModule } from "@ardium-ui/ui";

@Component({
  selector: 'kbd-appearances-example',
  templateUrl: 'kbd-appearances-example.html',
  standalone: true,
  styleUrl: 'kbd-appearances-example.scss',
  imports: [ArdiumKbdModule, ArdiumKbdShortcutModule],
})
export class KbdAppearancesExample {}