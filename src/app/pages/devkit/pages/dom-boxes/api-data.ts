import { ApiPageData } from 'src/app/components/api-page';

export const DomBoxesApiData: ApiPageData = {
  name: 'DOM Boxes',
  functions: [
    {
      name: 'getDomContentRect',
      description:
        'Calculates the content rectangle of an element, excluding padding and border values. This function is ideal for obtaining the precise dimensions of the inner content area of an element.',
      params: [
        {
          name: 'el',
          type: 'HTMLElement | ElementRef<HTMLElement>',
          description: 'The target element or Angular ElementRef whose content rectangle should be calculated.',
          required: true,
        },
      ],
      returnType: 'DOMRect',
    },
    {
      name: 'getDomPaddingRect',
      description:
        'Calculates the padding rectangle of an element, including padding but excluding border values. Use this function to get dimensions within padding boundaries, excluding any borders.',
      params: [
        {
          name: 'el',
          type: 'HTMLElement | ElementRef<HTMLElement>',
          description: 'The target element or Angular ElementRef whose padding rectangle should be calculated.',
          required: true,
        },
      ],
      returnType: 'DOMRect',
    },
  ],
};
