import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileSystemMethod, FileSystemService, FileSystemStartDirectory } from '@ardium-ui/devkit';

@Component({
  selector: 'file-system-save-as-example',
  templateUrl: './file-system-save-as-example.html',
  styleUrl: './file-system-save-as-example.scss',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class FileSystemSaveAsExample {
  readonly fileSystem = inject(FileSystemService);

  readonly fileName = signal<string>('gorillas.txt');
  readonly textToSave = signal<string>('Gorillas like to eat bamboo.');

  onButtonClick(): void {
    this.fileSystem.saveAs(this.textToSave(), {
      fileName: this.fileName(),
      method: FileSystemMethod.PreferFileSystem,
      directoryId: 'gorillas',
      startDirectory: FileSystemStartDirectory.Downloads,
    });
  }
}
