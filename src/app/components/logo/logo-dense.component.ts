import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-dense',
  standalone: true,
  imports: [],
  template: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 57.8">
    <path
      d="M48.4,21.7c-2,1.3-4.2,2-6.5,2c-3.7,0-7.1-1.5-9.8-4.5c-2.6,3-6,4.5-9.8,4.5c-2.3,0-4.6-0.7-6.5-2L26.4,3.3
	C27.6,1.1,29.9,0,32.1,0c2.2,0,4.4,1.1,5.7,3.3L48.4,21.7z"
    />
    <path
      d="M36.1,57.6c-0.1-2.3,0.4-4.6,1.6-6.6c1.9-3.2,4.9-5.4,8.9-6.1c-1.2-3.8-0.8-7.5,1.1-10.7c1.2-2,2.9-3.6,5-4.6
	L63.1,48c1.2,2.2,1.1,4.7-0.1,6.6c-1.1,1.9-3.2,3.3-5.7,3.2L36.1,57.6z"
    />
    <path
      d="M11.5,29.5c2.1,1.1,3.8,2.6,5,4.7c1.9,3.2,2.3,6.9,1,10.7c3.9,0.8,6.9,3,8.8,6.2c1.2,2,1.7,4.3,1.6,6.7l-21.2,0
	c-2.5,0-4.6-1.4-5.7-3.3c-1.1-1.9-1.3-4.4,0-6.6L11.5,29.5z"
    />
  </svg>`,
  styles: `
  :host {
    aspect-ratio: 1;
  }
  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    fill: currentColor;
  }`,
})
export class LogoDenseComponent {}
