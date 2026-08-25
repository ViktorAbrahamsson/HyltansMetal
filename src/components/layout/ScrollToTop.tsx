import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * The router keeps the scroll position when the path changes, so a click from
 * halfway down one page lands halfway down the next. Reset on navigation —
 * but leave POP (back/forward) alone, where the browser restores the position
 * the visitor actually left.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === 'POP') return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, navigationType]);

  return null;
}
