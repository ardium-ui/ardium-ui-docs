import { CommonModule } from '@angular/common';
import { Component, computed, ElementRef, input, model, viewChild } from '@angular/core';
import { coerceBooleanProperty } from '@ardium-ui/devkit';
import { ArdiumIconButtonModule, ArdiumIconModule } from '@ardium-ui/ui';
import { CopyButtonComponent } from '../../copy-button/copy-button.component';

export const AllowedCopyType = {
  Off: 'off',
  Left: 'left',
  Right: 'right',
  Both: 'both',
} as const;
export type AllowedCopyType = (typeof AllowedCopyType)[keyof typeof AllowedCopyType];

@Component({
  selector: 'app-two-pane-container',
  imports: [CommonModule, CopyButtonComponent, ArdiumIconButtonModule, ArdiumIconModule],
  templateUrl: './two-pane-container.component.html',
  styleUrl: './two-pane-container.component.scss',
})
export class TwoPaneContainerComponent {
  private readonly containerLeft = viewChild<ElementRef<HTMLElement>>('containerLeft');
  private readonly containerRight = viewChild<ElementRef<HTMLElement>>('containerRight');

  readonly textLeft = input.required<string>();
  readonly textRight = input.required<string>();

  readonly contentToCopyLeft = input<string>('');
  readonly contentToCopyRight = input<string>('');

  readonly allowScrollSync = input<boolean, any>(false, { transform: v => coerceBooleanProperty(v) });
  readonly allowLayoutChange = input<boolean, any>(false, { transform: v => coerceBooleanProperty(v) });
  readonly allowCopy = input<AllowedCopyType>(AllowedCopyType.Both);

  readonly allowCopyLeft = computed<boolean>(
    () => this.allowCopy() === AllowedCopyType.Left || this.allowCopy() === AllowedCopyType.Both
  );
  readonly allowCopyRight = computed<boolean>(
    () => this.allowCopy() === AllowedCopyType.Right || this.allowCopy() === AllowedCopyType.Both
  );

  readonly scrollSync = model<boolean | null>(false);
  readonly verticalLayout = model<boolean | null>(false);

  onContainerLeftScroll() {
    if (this.scrollSync()) return;
    const [left, right] = [this.containerLeft(), this.containerRight()];
    if (!left || !right) return;
    right.nativeElement.scrollTo(left.nativeElement.scrollLeft, 0);
  }

  onContainerRightScroll() {
    if (this.scrollSync()) return;
    const [left, right] = [this.containerLeft(), this.containerRight()];
    if (!left || !right) return;
    left.nativeElement.scrollTo(right.nativeElement.scrollLeft, 0);
  }
}
