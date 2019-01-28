import React from 'react';
import { BrowserRouter as Router, Link, withRouter } from 'react-router-dom';

//assets
import logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/pro-regular-svg-icons';

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
            <Router /><Link to='/'><img className='logo' src={logo} alt='SM Logo' /></Link>
            <nav>
                <div className='title' onClick={this.handleMenuToggle}>{name}
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <ul className={this.state.displayMenu ? 'show' : 'hide'}>
                    {['2x2x2', '3x3x3'].map(group => [
                        <li className='group' key={group}>{group}</li>,
                        this.getGroupedNav(group, this.props.methods),
                    ])}
                </ul>
            </nav>
        </header >;
    };
};

export default withRouter(Header);