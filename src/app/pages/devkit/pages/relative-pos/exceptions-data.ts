import { ExceptionsPageData } from 'src/app/components/exceptions-page/exceptions-page.types';

export const RelativePosExceptionsData: ExceptionsPageData = {
  name: 'Relative Pos',
  exceptions: [
    {
      name: 'getEventRelativePos',
      exceptions: [
        {
          code: 'DKT-FT9000',
          exceptionText: 'DKT-FT9000: Cannot read event position. The TouchEvent has no Touch instances.',
          description: [
            'This exception occurs when attempting to get the event position from a <code>TouchEvent</code> that contains no <code>Touch</code> instances.',
            'The function <code>getEventRelativePos</code> expects at least one touch point in the event, but if none are available, it cannot determine a position and throws this error.',
          ],
        },
      ],
    },
  ],
};
