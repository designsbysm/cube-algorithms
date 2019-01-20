import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Method from './Method';
import './index.scss';

import methodRouxInt from './methods/rouxInt';
import methodOrtega from './methods/ortega';
import methodFourLLL from './methods/fourLLL';

const methods = [
    methodRouxInt,
    methodOrtega,
    methodFourLLL,
];

const App = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    {methods.map(method => {
                        return <li key={method.key}><Link to={method.key}>{method.name}</Link></li>;
                    })}
                </ul>
            </nav>

            {methods.map(method => {
                const component = () => <Method name={method.name} stages={method.stages} />;
                let route = <Route key={method.key} path={`/${method.key}/`} component={component} />;

                if (method.key === '/') {
                    route = <Route key={method.key} path='/' exact component={component} />;
                }

                return route;
            })}
        </div>
    </Router>
);

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);