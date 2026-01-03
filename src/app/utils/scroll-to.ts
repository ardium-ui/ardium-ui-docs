import { kebab } from "case";

export interface ScrollToOptions {
  offset?: number | string;
  noHighlight?: boolean;
  behavior?: ScrollBehavior;
}

const _scrollToDefaultOptions: Required<ScrollToOptions> = {
  offset: '30%',
  noHighlight: false,
  behavior: "smooth",
}

export function scrollTo(tagQuery: string, options: ScrollToOptions = {}): void {
  const { offset, noHighlight, behavior } = { ..._scrollToDefaultOptions, ...options };

  // try original selector first
  console.log('scrollTo called with tagQuery:', tagQuery);
  let element = document.querySelector(tagQuery);
  // try kebab-case if not found
  if (!element) {
    const originalFirstChar = tagQuery.charAt(0);
    tagQuery = kebab(tagQuery.replace(/[^\w\- ]/gi, ''));
    // restore original first char if it was a special character (., #, etc.)
    if (/[^a-zA-Z0-9]/.test(originalFirstChar)) {
      tagQuery = originalFirstChar + tagQuery;
    }
    element = document.querySelector(tagQuery);
  }
  // still not found
  if (!element) {
    console.warn(`Element not found for selector: ${tagQuery}`);
    return;
  }
  const elementRect = element.getBoundingClientRect();
  const absoluteElementTop = elementRect.top + window.scrollY;

  let offsetValue = 0;

  // check if offset is a percentage (e.g. "20%")
  if (typeof offset === 'string' && offset.endsWith('%')) {
    const percent = parseFloat(offset);
    if (!isNaN(percent)) {
      offsetValue = (percent / 100) * window.innerHeight;
    }
  } else if (typeof offset === 'number') {
    // if it's a number, treat it as pixels
    offsetValue = offset;
  }

  const offsetPosition = absoluteElementTop - offsetValue;

  window.scrollTo({
    top: offsetPosition,
    behavior: behavior,
  });

  if (noHighlight) return;

  element.classList.add('scrolled-to');

  setTimeout(() => {
    element.classList.remove('scrolled-to');
  }, 3000);
}
