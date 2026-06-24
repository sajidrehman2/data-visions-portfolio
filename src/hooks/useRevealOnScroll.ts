import { useEffect } from 'react';

/**
 * Adds the `reveal-in` class to every element matching `selector` inside `root`
 * when it enters the viewport. Pair with the `.reveal` utility in index.css.
 */
export function useRevealOnScroll(
  selector: string = '.reveal',
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

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
