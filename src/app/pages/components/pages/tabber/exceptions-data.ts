import { ExceptionsPageData } from 'src/app/components/exceptions-page/exceptions-page.types';

export const tabberExceptionsData: ExceptionsPageData = {
  name: 'Tabber',
  exceptions: [
    {
      name: 'ArdiumTabberComponent',
      exceptions: [
        {
          code: 'ARD-NF6000',
          exceptionText:
            'Trying to select a tab with id \'<i>some tab id</i>\' that does not exist.',
          description: [
            "This exceptions is raised if the <code>[selectedTabId]</code> input is set to a tab id that doesn't exist in the tabber.",
            'The selected tab will not change in this case.',
          ],
        },
      ],
    },
  ],
};
