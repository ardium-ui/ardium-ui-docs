import { ExceptionsPageData } from 'src/app/components/exceptions-page/exceptions-page.types';

export const HttpServiceExceptionsData: ExceptionsPageData = {
  name: 'HttpService',
  exceptions: [
    {
      name: 'HttpService',
      exceptions: [
        {
          code: 'DKT-WA0020',
          exceptionText:
            'The url "<i>url passed in</i>" passed into custom HTTP Service seems to be faulty, as it would produce a request to "<i>final url</i>". Custom HTTP Service instances prepend an API url, and thus only accept relative url paths.',
          description: [
            'This exception is shown when a non-relative url is passed into a method of the HTTP Service created using <code>createHttpService</code>.',
            'Custom HTTP Services are meant to be used together with a constant API url prepended to every request, and thus their methods only allow passing in urls relative to the API url assigned to the service.',
          ],
        },
      ],
    },
  ],
};
