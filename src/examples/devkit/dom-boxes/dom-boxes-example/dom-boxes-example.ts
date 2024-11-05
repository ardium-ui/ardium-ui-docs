import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, HostListener, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { getDomContentRect, getDomPaddingRect } from '@ardium-ui/devkit';

@Component({
  selector: 'dom-boxes-example',
  templateUrl: './dom-boxes-example.html',
  styleUrl: './dom-boxes-example.scss',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class DomBoxesExample {
  readonly width = signal<string>('200px');
  readonly height = signal<string>('100px');
  readonly padding = signal<string>('12px 24px');
  readonly border = signal<string>('4px');

  readonly exampleBox = viewChild<ElementRef<HTMLElement>>('exampleBox');

  private readonly _cd = inject(ChangeDetectorRef);
  @HostListener('document:scroll')
  @HostListener('window:resize')
  onScroll() {
    this._cd.markForCheck();
  }

  getBoundingClientRect(): DOMRect {
    return this.exampleBox()!.nativeElement.getBoundingClientRect();
  }
  getPaddingRect(): DOMRect {
    return getDomPaddingRect(this.exampleBox()!);
  }
  getContentRect(): DOMRect {
    return getDomContentRect(this.exampleBox()!);
  }
}
