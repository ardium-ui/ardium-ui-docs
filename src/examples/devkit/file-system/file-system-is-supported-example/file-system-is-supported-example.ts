import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileSystemService } from '@ardium-ui/devkit';

@Component({
  selector: 'file-system-is-supported-example',
  templateUrl: './file-system-is-supported-example.html',
  styleUrl: './file-system-is-supported-example.scss',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class FileSystemIsSupportedExample {
  readonly fileSystem = inject(FileSystemService);

  readonly hasClicked = signal<boolean>(false);
  readonly isSupported = signal<boolean>(false);

  onButtonClick(): void {
    this.hasClicked.set(true);
    this.isSupported.set(this.fileSystem.isFileSystemAPISupported('showOpenFilePicker'));
  }
}
