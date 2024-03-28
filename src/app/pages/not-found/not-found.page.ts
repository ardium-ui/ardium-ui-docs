import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumButtonModule } from '@ardium-ui/ui';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule, ArdiumButtonModule],
  templateUrl: './not-found.page.html',
  styleUrl: './not-found.page.scss'
})
export class NotFoundPage {

}
