import { Component, ElementRef, HostListener, signal, viewChild } from '@angular/core';
import { EventRelativePos, getEventRelativePos } from '@ardium-ui/devkit';

@Component({
  selector: 'relative-pos-basic-example',
  templateUrl: './relative-pos-basic-example.html',
  styleUrl: './relative-pos-basic-example.scss',
  standalone: true,
  imports: [],
})
export class RelativePosBasicExample {
  readonly lastEventData = signal<EventRelativePos<HTMLElement> | null>(null);

  readonly targetBox = viewChild<ElementRef<HTMLElement>>('targetBox');

  @HostListener('document:click', ['$event'])
  onClick(event: PointerEvent): void {
    if (!this.targetBox()) return;
    this.lastEventData.set(getEventRelativePos(event, this.targetBox()!));
  }
}
