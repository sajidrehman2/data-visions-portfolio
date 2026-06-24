import { useEffect } from 'react';

/**
 * Adds the `reveal-in` class to every element matching `selector` when it
 * enters the viewport. Pair with the `.reveal` utility in index.css.
 *
 * Pass values in `deps` that should re-trigger discovery (e.g. when a list
 * of cards re-renders after a filter change).
 */
export function useRevealOnScroll(
  selector: string = '.reveal',
  deps: ReadonlyArray<unknown> = [],
  options: IntersectionObserverInit = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (els.length === 0) return;

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('reveal-in');
          io.unobserve(e.target);
        }
      }
    }, options);

    els.forEach((el) => {
      // Only observe elements that haven't already revealed
      if (!el.classList.contains('reveal-in')) io.observe(el);
    });
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector, ...deps]);
}
