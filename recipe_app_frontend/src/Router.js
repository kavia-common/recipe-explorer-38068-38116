import React from 'react';
import App from './App';
import SignIn from './SignIn';

/**
 * PUBLIC_INTERFACE
 * Router
 * Lightweight route switcher using window.location.hash to avoid adding new dependencies.
 * - Supports "/" and "/sign-in" routes.
 * - Keeps CRA template minimal without react-router-dom.
 */
export default function Router() {
  const [hash, setHash] = React.useState(window.location.hash);

  React.useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    // initialize default route
    if (!window.location.hash) {
      window.location.hash = '#/';
    }
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const route = (hash || '#/').replace(/^#/, '');

  if (route === '/sign-in') {
    return <SignIn />;
  }

  // default route
  return <App />;
}
