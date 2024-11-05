import { Component, signal } from '@angular/core';
import { ArdiumFilePipesModule } from '@ardium-ui/devkit';

@Component({
  selector: 'file-pipes-example',
  templateUrl: './file-pipes-example.html',
  styleUrl: './file-pipes-example.scss',
  standalone: true,
  imports: [ArdiumFilePipesModule],
})
export class FilePipesExample {
  readonly file = signal<File | undefined>(undefined);

  onFileUpload(event: Event): void {
    this.file.set((event.target as HTMLInputElement).files?.[0]);
  }
}
