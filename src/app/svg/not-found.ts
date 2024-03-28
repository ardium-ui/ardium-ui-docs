import { Component } from '@angular/core';

@Component({
  selector: 'svg-not-found',
  standalone: true,
  imports: [],
  template: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
    <path
      d="M12,2C9.78,2,7.73,2.72,6.07,3.95c-0.81,0.6-1.52,1.31-2.12,2.12C2.72,7.73,2,9.78,2,12c0,5.52,4.48,10,10,10
    	c2.22,0,4.27-0.72,5.93-1.95c0.81-0.6,1.52-1.31,2.12-2.12C21.28,16.27,22,14.22,22,12C22,6.48,17.52,2,12,2z M12,19
    	c-3.87,0-7-3.13-7-7c0-1.39,0.4-2.68,1.11-3.77l9.66,9.66C14.68,18.6,13.39,19,12,19z M8.23,6.11C9.32,5.4,10.61,5,12,5
    	c3.87,0,7,3.13,7,7c0,1.39-0.4,2.68-1.11,3.77L8.23,6.11z"
      fill="currentColor"
    />
  </svg>`,
  styleUrl: './common.scss',
})
export class NotFoundSvg {}
