import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

// components
import Method from './components/Method';
import Header from './components/Header';

// assets
import './styles/index.scss';
import logo from './images/logo.svg';
import methods from './methods';

const defaultRoute = 'roux';
const defaultStages = methods.find(item => item.key === defaultRoute)?.stages;

const App = () => {
  return (
    <Router>
      <Header
        logo={logo}
        methods={methods}
      />
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
