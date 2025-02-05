import { ExceptionsPageData } from 'src/app/components/exceptions-page/exceptions-page.types';

export const KbdExceptionsData: ExceptionsPageData = {
  name: 'KBD',
  exceptions: [
    {
      name: 'ArdiumKbdComponent',
      exceptions: [
        {
          code: 'ARD-FT5030',
          exceptionText: 'Using <ard-kbd> without specifying the [key] field is not allowed.',
          description: [
            'When using the <code>ArdiumKbdComponent</code>, either the node content or the <code>[key]</code> field must be defined.',
            'To resolve this issue define the node content if the KBD value is not supposed to change, or use the <code>[key]</code> input otherwise.',
          ],
        },
      ],
    },
  ],
};