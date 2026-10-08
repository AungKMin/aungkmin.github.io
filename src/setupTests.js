// jest-dom adds custom matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/vitest';

// jsdom has no layout engine, so matchMedia never reports a match and MUI's
// useMediaQuery would resolve every breakpoint to false. Pin it to a desktop
// viewport so the permanent drawer renders as it does in a browser.
window.matchMedia = (query) => ({
  matches: query.includes('min-width'),
  media: query,
  onchange: null,
  addEventListener: () => {},
  removeEventListener: () => {},
  addListener: () => {},
  removeListener: () => {},
  dispatchEvent: () => false,
});
