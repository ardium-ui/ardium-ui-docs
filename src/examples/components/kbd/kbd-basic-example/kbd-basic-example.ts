import { Component } from "@angular/core";
import { ArdiumKbdModule } from "@ardium-ui/ui";

@Component({
  selector: 'kbd-basic-example',
  templateUrl: 'kbd-basic-example.html',
  standalone: true,
  imports: [ArdiumKbdModule],
})
export class KbdBasicExample {}