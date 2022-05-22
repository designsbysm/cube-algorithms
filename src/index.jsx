import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// components
import Method from './components/method';
import Header from './components/header';

// assets
import './styles/index.scss';
import logo from './images/logo.svg';
import methods from './methods';

const defaultRoute = '/roux';
const App = () => (
  <Router>
    <>
      <Header
        logo={logo}
        methods={methods}
      />
      {methods.map(method => {
        const component = () => <Method stages={method.stages} />;

        return <Route
          component={component}
          key={method.key}
          path={`/${method.key}/`}
        />;
      })}
      <Route
        exact
        path='/'
        render={() => <Redirect to={defaultRoute} />}
      />
    </>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
