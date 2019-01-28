import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

//components
import Method from './components/method';
import Header from './components/header';

//assets
import './index.scss';
import methods from './methods';

const defaultRoute = '/roux';
const App = () =>
    <Router>
        <>
            <Route path='*' component={() => <Header methods={methods} />} />
            {methods.map(method => {
                const component = () => <Method stages={method.stages} />;
                let route = <Route key={method.key} path={`/${method.key}/`} component={component} />;

                return route;
            })}
            <Route exact path='/' render={() => <Redirect to={defaultRoute} />} />
        </>
    </Router>;

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);