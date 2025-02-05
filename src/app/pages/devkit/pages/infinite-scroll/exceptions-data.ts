import { ExceptionsPageData } from 'src/app/components/exceptions-page/exceptions-page.types';

export const InfiniteScrollExceptionsData: ExceptionsPageData = {
  name: 'Infinite Scroll',
  exceptions: [
    {
      name: 'ArdiumInfiniteScrollDirective',
      exceptions: [
        {
          code: 'DKT-NF1000',
          exceptionText:
            'ardInfScroll directive has target set to "html", but the host element has just been scrolled. To ensure the directive functions properly, make the host element unscrollable.',
          description: [
            'This exception is thrown if the directive has its <code>ardInfScrollTarget<code> set to <code>"html"</code>, but a scroll event on the host is detected.',
            'The host element should be unscrollable, and its height should fit the whole content; otherwise unexpected issues might arise.',
          ],
        },
      ],
    },
  ],
};
