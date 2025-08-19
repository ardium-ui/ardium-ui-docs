import { Component, OnDestroy, signal } from '@angular/core';
import { ArdiumButtonModule, ArdiumDialogModule } from "@ardium-ui/ui";

@Component({
  selector: 'dialog-delete-confirmation-example',
  templateUrl: './dialog-delete-confirmation-example.html',
  styleUrl: './dialog-delete-confirmation-example.scss',
  standalone: true,
  imports: [ArdiumDialogModule, ArdiumButtonModule],
})
export class DialogDeleteConfirmationExample implements OnDestroy {
  readonly deleteConfirmationOpen = signal<boolean>(false);

  readonly canDelete = signal<boolean>(false);

  private _timeout: ReturnType<typeof setTimeout> | null = null;
  openDeleteConfirmation() {
    this.deleteConfirmationOpen.set(true);
    this.canDelete.set(false);

    this._timeout = setTimeout(() => {
      this.canDelete.set(true);
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
  }
}
