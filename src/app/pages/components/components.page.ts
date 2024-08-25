import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KbdPage } from './pages/kbd/kbd.page';

@Component({
  selector: 'components-page',
  standalone: true,
  imports: [RouterModule, KbdPage],
  templateUrl: './components.page.html',
  styleUrl: './components.page.scss'
})
export class ComponentsPage {

}
