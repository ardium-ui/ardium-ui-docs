import { ExceptionsPageData } from 'src/app/components/exceptions-page/exceptions-page.types';

export const FileSystemExceptionsData: ExceptionsPageData = {
  name: 'FileSystem',
  exceptions: [
    {
      name: 'FileSystemService',
      exceptions: [
        {
          code: 'DKT-FT0010',
          exceptionText:
            '"accept" property in FileSystemService must be a list of valid file extensions. Value "<i>some value</i>" is not a valid extension.',
          description: [
            'This exceptions is raised by the <code>requestFileUpload</code> function if the <code>accept</code> option has at least one invalid extension in the list.',
            'A valid extension is an extension that starts with a dot (<code>.</code>) and is followed by at least one alphanumeric character. <code>accept</code> can also take the string <code>"*"</code> as a value, meaning that any extension is accepted.',
          ],
        },
      ],
    },
  ],
};
