import { Component } from '@angular/core';
import { CodeComponent } from 'src/app/components/code/code.component';

@Component({
  selector: 'app-kbd',
  standalone: true,
  imports: [CodeComponent],
  templateUrl: './kbd.page.html',
  styleUrl: './kbd.page.scss',
})
export class KbdPage {
  code = `<ard-kbd>Ctrl</ard-kbd>`;
}
