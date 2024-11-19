import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FileSystemMethod, FileSystemService, FileSystemStartDirectory } from '@ardium-ui/devkit';

@Component({
  selector: 'file-system-request-upload-example',
  templateUrl: './file-system-request-upload-example.html',
  styleUrl: './file-system-request-upload-example.scss',
  standalone: true,
  imports: [CommonModule],
})
export class FileSystemRequestUploadExample {
  readonly fileSystem = inject(FileSystemService);

  readonly successfulUpload = signal<boolean | null>(null);
  readonly fileName = signal<string>('');

  async onButtonClick() {
    const file = await this.fileSystem.requestFileUpload({
      directoryId: 'gorilla',
      startDirectory: FileSystemStartDirectory.Downloads,
      method: FileSystemMethod.PreferFileSystem,
      multiple: false,
      types: [
        { description: 'Text files', accept: { 'text/plain': ['.txt'] } },
        { description: 'Image files', accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpg', '.jpeg'] } },
        { description: 'PDF files', accept: { 'application/pdf': ['.pdf'] } },
      ],
    }) as File | null;
    this.successfulUpload.set(!!file);
    if (this.successfulUpload()) {
      this.fileName.set(file?.name ?? 'No file name')
    }
  }
}
