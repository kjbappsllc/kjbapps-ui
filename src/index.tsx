import 'tailwindcss/tailwind.css';
import { createRoot } from 'react-dom/client';
import { AppRouter } from './app.routing';
import { setupAnalytics } from './app.analytics';

const container = document.getElementById('root');

if (container != void 0) {
  if (process.env.NODE_ENV === 'production') {
    setupAnalytics()
  }
  console.log('Binding To Root');
  const root = createRoot(container);
  root.render(<AppRouter />);
} else {
  console.error('Invalid root node for react to bind to');
}
