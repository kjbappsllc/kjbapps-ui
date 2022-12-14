import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './app';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
};
