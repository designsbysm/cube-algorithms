import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import './styles/index.scss';
import Method from './components/Method';
import Header from './components/Header';
import methods from './methods';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {methods.map(method => {
          return (
            <Route
              element={<Method />}
              key={method.key}
              path={`${method.key}`}
            />
          );
        })}
        <Route
          element={<Navigate
            replace
            to={'/roux'}
          />}
          path='*'
        />
      </Routes>
    </Router>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
