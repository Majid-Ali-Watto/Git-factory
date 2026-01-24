/**
 * Smoothly scrolls the page to the top
 * Uses native smooth scroll behavior for better performance
 * @returns {void}
 * @example
 * scrollToTop();
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/**
 * Smoothly scrolls to a specific element
 * @param {HTMLElement} element - The element to scroll to
 * @param {number} [offset=0] - Offset from top in pixels
 * @returns {void}
 * @example
 * const element = document.getElementById('commands-list');
 * scrollToElement(element, 80);
 */
export const scrollToElement = (element, offset = 0) => {
  if (!element) {
    console.warn("Element not found for scrolling");
    return;
  }

  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({
    top,
    behavior: "smooth",
  });
};

/**
 * Checks if page has scrolled past a certain threshold
 * Useful for showing/hiding scroll-to-top buttons
 * @param {number} threshold - Scroll distance in pixels
 * @returns {boolean} True if scrolled past threshold
 * @example
 * if (isScrolledPast(300)) {
 *   showScrollButton();
 * }
 */
export const isScrolledPast = (threshold = 300) => {
  return window.scrollY > threshold;
};
