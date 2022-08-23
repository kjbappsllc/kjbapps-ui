import 'tailwindcss/tailwind.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRouter } from './app.routing';

const container = document.getElementById('root');

if (container != void 0) {
  const root = createRoot(container);
  root.render(<AppRouter />);
} else {
  console.error('Invalid root node for react to bind to')
}
