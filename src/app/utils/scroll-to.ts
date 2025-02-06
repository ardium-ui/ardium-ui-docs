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

  const element = document.querySelector(tagQuery);
  if (!element) {
    console.warn(`Element not found for selector: ${tagQuery}`);
    return;
  }
  const elementRect = element.getBoundingClientRect();
  const absoluteElementTop = elementRect.top + window.scrollY;

  let offsetValue = 0;

  // Check if offset is a percentage (e.g. "20%")
  if (typeof offset === 'string' && offset.endsWith('%')) {
    const percent = parseFloat(offset);
    if (!isNaN(percent)) {
      offsetValue = (percent / 100) * window.innerHeight;
    }
  } else if (typeof offset === 'number') {
    // If it's a number, treat it as pixels
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
