import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumButtonModule } from '@ardium-ui/ui';
import { NotFoundSvg } from '@svg';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule, ArdiumButtonModule, NotFoundSvg],
  templateUrl: './not-found.page.html',
  styleUrl: './not-found.page.scss',
})
export class NotFoundPage {}
