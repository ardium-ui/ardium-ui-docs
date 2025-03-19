import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumButtonModule } from '@ardium-ui/ui';
import { LogoComponent } from "../../components/logo/logo.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ArdiumButtonModule, LogoComponent, RouterModule],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {

}
