import { ApiPageData } from 'src/app/components/api-page';

export const FilePipesApiData: ApiPageData = {
  name: 'File Utility Pipes',
  modules: [
    {
      name: 'ArdiumFilePipesModule',
      description:
        'Module providing file utility pipes for extracting file extension, file name, and formatting file size.',
      exports: ['ArdiumFileExtensionPipe', 'ArdiumFileNamePipe', 'ArdiumFileSizePipe'],
    },
  ],
  pipes: [
    {
      name: 'fileext',
      selector: 'fileext',
      exportedFrom: 'ArdiumFilePipesModule',
      description:
        'Extracts the file extension from a filename or File object. Optionally includes the dot prefix in the returned extension.',
      params: [
        {
          name: 'value',
          type: 'string | File',
          description: 'The file name as a string or a File object from which the extension is extracted.',
          required: true,
        },
        {
          name: 'withDot',
          type: 'boolean',
          description: 'Determines if the dot should prefix the returned extension (default: false).',
          required: false,
          default: 'false',
        },
      ],
    },
    {
      name: 'filename',
      selector: 'filename',
      exportedFrom: 'ArdiumFilePipesModule',
      description: 'Extracts the base name from a file name or File object, excluding the extension.',
      params: [
        {
          name: 'value',
          type: 'string | File',
          description: 'The file name as a string or a File object from which the base name is derived.',
          required: true,
        },
      ],
    },
    {
      name: 'filesize',
      selector: 'filesize',
      exportedFrom: 'ArdiumFilePipesModule',
      description:
        'Converts a file size (in bytes) to a human-readable format. Allows customization of precision and spacing.',
      params: [
        {
          name: 'value',
          type: 'number',
          description: 'The file size in bytes.',
          required: true,
        },
        {
          name: 'precision',
          type: 'number',
          description: 'Decimal precision for the converted size (default: 2).',
          required: false,
          default: '2',
        },
        {
          name: 'useSpace',
          type: 'boolean',
          description: 'Determines if a space separates the value and unit (default: false).',
          required: false,
          default: 'false',
        },
      ],
    },
  ],
};
