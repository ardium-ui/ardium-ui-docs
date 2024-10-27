import { ApiPageData } from 'src/app/components/api-page';

export const EscapeHtmlApiData: ApiPageData = {
  name: 'Escape HTML',
  modules: [
    {
      name: 'ArdiumEscapeHTMLModule',
      exports: 'ArdiumEscapeHTMLPipe',
    },
  ],
  pipes: [
    {
      name: 'ArdiumEscapeHTMLPipe',
      exportedFrom: 'ArdiumEscapeHTMLModule',
      selector: 'escapeHTML',
      description: 'Transforms an input string into a string that is safe to use inside of HTML.',
    },
  ],
  functions: [
    {
      name: 'escapeHTML',
      description: 'Transforms an input string into a string that is safe to use inside of HTML.',
      returnType: 'string',
      params: [
        {
          name: 'value',
          type: 'string',
          description: 'The string to transform.',
          required: true,
        },
      ],
    },
  ],
};
