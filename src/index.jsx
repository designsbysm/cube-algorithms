import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Method from './Method';

//assets
import './index.scss';

//method data
import methodRouxInt from './methods/rouxInt';
import methodOrtega from './methods/ortega';
import methodFourLLL from './methods/fourLLL';

const methods = [
    methodRouxInt,
    methodOrtega,
    methodFourLLL,
];

class Header extends React.Component {
    render() {
        const current = this.props.methods.filter(method => {
            if (this.props.match.url.endsWith(method.key)) {
                return method.name;
            } else {
                return false;
            }
        });

        let name = 'Unknown';
        if (current[0]) {
            name = current[0].name;
        }

        return <header>
            <nav>
                <h1>{name}</h1>
                <ul>
                    {this.props.methods.map(method => {
                        return <li key={method.key}><Link to={method.key}>{method.name}</Link></li>;
                    })}
                </ul>
            </nav>
        </header>;
    };
};

const App = () => (
    <Router>
        <div>
            <Route path='*' component={(props) => <Header methods={methods} {...props} />} />
            {methods.map(method => {
                const component = () => <Method stages={method.stages} />;
                let route = <Route key={method.key} path={`/${method.key}/`} component={component} />;

                return route;
            })}
            <Route exact path='/' render={() => <Redirect to='/rouxInt' />} />
        </div>
    </Router>
);

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);