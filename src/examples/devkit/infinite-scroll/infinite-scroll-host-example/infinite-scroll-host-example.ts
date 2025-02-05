import { Component, computed, signal } from '@angular/core';
import { ArdiumInfiniteScrollModule } from '@ardium-ui/devkit';

@Component({
  selector: 'infinite-scroll-host-example',
  templateUrl: './infinite-scroll-host-example.html',
  styleUrl: './infinite-scroll-host-example.scss',
  standalone: true,
  imports: [ArdiumInfiniteScrollModule],
})
export class InfiniteScrollHostExample {
  private readonly currentPage = signal<number>(1);
  readonly items = computed<number[]>(() => new Array(this.currentPage() * 5).fill(0).map((_, i) => i));

  readonly isInfScrollActive = signal<boolean>(true);

  onThresholdReach() {
    console.log(`Threshold has been reached! Loading data for page ${this.currentPage() + 1}...`);
    setTimeout(() => {
      this.currentPage.update(v => v + 1);
      this.isInfScrollActive.set(true);
    }, 100);
  }
}
