import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Method from './method';

//assets
import './index.scss';
import logo from './images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/pro-regular-svg-icons';
import methods from './methods';

class Header extends React.Component {
    state = {
        displayMenu: false,
    };

    handleMenuToggle = () => {
        this.setState({
            displayMenu: !this.state.displayMenu,
        });
    };

    handleMenuHide = () => {
        this.setState({
            displayMenu: false,
        });
    };

    getGroupedNav = (group, methods) => {
        return methods.filter(method =>
            method.group === group
        ).map(method =>
            <li key={method.key} onClick={this.handleMenuHide}><Link to={method.key}>{method.name}</Link></li>
        );
    };

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
            <img className='logo' src={logo} alt='SM Logo' />
            <nav>
                <div className='title' onClick={this.handleMenuToggle}>{name}
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <ul className={this.state.displayMenu ? 'show' : 'hide'}>
                    {['2x2x2', '3x3x3'].map(group => [
                        <li className='group' key={group}>{group}</li>,
                        this.getGroupedNav(group, methods),
                    ])}
                </ul>
            </nav>
        </header>;
    };
};

const App = () =>
    <Router>
        <>
            <Route path='*' component={(props) => <Header methods={methods} {...props} />} />
            {methods.map(method => {
                const component = () => <Method stages={method.stages} />;
                let route = <Route key={method.key} path={`/${method.key}/`} component={component} />;

                return route;
            })}
            <Route exact path='/' render={() => <Redirect to='/roux' />} />
        </>
    </Router>;

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);