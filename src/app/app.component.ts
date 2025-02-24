import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavService } from '@services/nav';
import { scrollTo } from '@utils';
import { Subject, takeUntil } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  providers: [NavService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  private readonly route = inject(ActivatedRoute);

  private readonly firstFragmentFound$ = new Subject();

  ngAfterViewInit(): void {
    this.route.fragment.pipe(takeUntil(this.firstFragmentFound$)).subscribe(v => {
      if (v) {
        setTimeout(() => {
          scrollTo('#' + v, { offset: 96, behavior: 'instant' });
          this.firstFragmentFound$.next(true);
          this.firstFragmentFound$.complete();
        }, 0);
      }
    });

    setTimeout(() => {
      this.firstFragmentFound$.next(true);
      this.firstFragmentFound$.complete();
    }, 1000);
  }
}
