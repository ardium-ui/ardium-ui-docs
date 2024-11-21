import { ApiPageData } from 'src/app/components/api-page';

export const FileSystemApiData: ApiPageData = {
  name: 'File System',
  services: [
    {
      name: 'FileSystemService',
      providedIn: '"root"',
      description:
        'Service for handling file system operations, including saving, uploading, and reading files. It leverages the File System Access API when available and provides fallback methods for unsupported browsers.',
      methods: [
        {
          name: 'isFileSystemAPISupported',
          description: 'Checks if the File System Access API is supported for the specified method.',
          params: [
            {
              name: 'method',
              type: "'showSaveFilePicker' | 'showOpenFilePicker'",
              description: 'The file system method to check for support.',
              required: true,
            },
          ],
          returnType: 'boolean',
        },
        {
          name: 'saveAs',
          description: 'Saves data as a file using the File System API or a fallback method.',
          params: [
            {
              name: 'data',
              type: 'string | Blob',
              description: 'The data to be saved, either as a string or a Blob.',
              required: true,
            },
            {
              name: 'options',
              type: 'FileSystemSaveOptions',
              description: 'Options for saving the file, such as file name and save method.',
              required: false,
              default: '{ method: FileSystemMethod.PreferFileSystem, fileName: "download" }',
              isMergedObject: true,
            },
          ],
          returnType: 'Promise<boolean>',
        },
        {
          name: 'requestFileUpload',
          description: 'Requests a file upload using the File System Access API or a fallback method.',
          params: [
            {
              name: 'options',
              type: 'FileSystemRequestOptions',
              description: 'Options for requesting the file upload, such as accepted file types.',
              required: false,
              default: '{ method: FileSystemMethod.PreferFileSystem, multiple: false }',
              isMergedObject: true,
            },
          ],
          returnType: 'Promise<File | File[] | null>',
        },
        {
          name: 'readFile',
          description: 'Reads the content of a file as a string or ArrayBuffer, depending on the specified method.',
          params: [
            {
              name: 'file',
              type: 'File',
              description: 'The file to read.',
              required: true,
            },
            {
              name: 'readAs',
              type: "'text' | 'binary'",
              description: 'The method to read the file ("text" for string or "binary" for ArrayBuffer).',
              required: false,
              default: "'text'",
            },
            {
              name: 'encoding',
              type: 'string',
              description: 'The encoding to use when reading the file as text. Defaults to UTF-8.',
              required: false,
              default: "'UTF-8'",
            },
          ],
          returnType: 'Promise<string | ArrayBuffer | null>',
        },
      ],
    },
  ],
  enums: [
    {
      name: 'FileSystemMethod',
      description:
        'Enumeration of file system methods to define whether the File System API or cross-browser compatible methods should be used.',
      definition: `export const FileSystemMethod = {
  PreferFileSystem: 'preferFileSystem',
  CrossBrowser: 'crossBrowser',
} as const;
export type FileSystemMethod = typeof FileSystemMethod[keyof typeof FileSystemMethod];`,
    },
    {
      name: 'FileSystemStartDirectory',
      description: 'Enumeration of predefined directories to use as the starting location for file dialogs.',
      definition: `export const FileSystemStartDirectory = {
  Desktop: 'desktop',
  Documents: 'documents',
  Downloads: 'downloads',
  Music: 'music',
  Pictures: 'pictures',
  Videos: 'videos',
} as const;
export type FileSystemStartDirectory = typeof FileSystemStartDirectory[keyof typeof FileSystemStartDirectory];`,
    },
  ],
  types: [
    {
      name: 'FileSystemSaveOptions',
      description: 'Configuration options for saving files, including file name, method, and allowed file types.',
      definition: `type FileSystemSaveOptions = {
  method: "preferFileSystem";
  fileName?: string;
  directoryId?: string;
  startDirectory?: FileSystemStartDirectory;
  types?: Array<{
    description?: string;
    accept: Record<string, string[]>
  }>
} | {
  method: "crossBrowser";
}`,
    },
    {
      name: 'FileSystemRequestOptions',
      description: 'Configuration options for requesting file uploads, including accepted file types and method.',
      definition: `type FileSystemRequestOptions = {
  method: "preferFileSystem";
  accept?: string | string[];
  multiple?: boolean;
  directoryId?: string;
  startDirectory?: FileSystemStartDirectory;
  types?: Array<{
    description?: string;
    accept: Record<string, string[]>
  }>
} | {
  method: "crossBrowser";
}`,
    },
  ],
};
