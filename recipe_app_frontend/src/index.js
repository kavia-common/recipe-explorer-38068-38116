import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';

/**
 * PUBLIC_INTERFACE
 * React application entrypoint.
 * Mounts the lightweight hash-based Router that exposes "/" and "/sign-in".
 */
const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
