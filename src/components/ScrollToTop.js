// ScrollToTop Component
// Automatically scrolls to the top of the page whenever the route changes.
// This prevents content from appearing partially under the header.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // useLocation hook provides the current route path
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top smoothly whenever pathname changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]); // Dependency array triggers effect on route change

  return null;
}

export default ScrollToTop;
