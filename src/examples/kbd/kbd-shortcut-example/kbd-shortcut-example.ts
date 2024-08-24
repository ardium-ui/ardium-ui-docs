import { Component } from "@angular/core";
import { ArdiumKbdShortcutModule } from "@ardium-ui/ui";

@Component({
  selector: 'kbd-shortcut-example',
  templateUrl: 'kbd-shortcut-example.html',
  standalone: true,
  imports: [ArdiumKbdShortcutModule],
})
export class KbdShortcutExample {}