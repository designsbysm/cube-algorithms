import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//assets
import logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/pro-regular-svg-icons';

class Dropdown extends React.Component {
    getSubItems = group => {
        return this.props.methods.filter(method =>
            method.group === group
        ).map(method =>
            <li className='nav-subitem' key={method.key} onClick={this.props.doMenuHide}><Link to={method.key}>{method.name}</Link></li>
        );
    };

    render() {
        return <div className='nav-item'>
            <div className='title' onClick={this.props.doMenuToggle} onMouseEnter={this.props.doMenuShow}>{this.props.title()}
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <ul className={`dropdown ${this.props.displayMenu ? 'show' : 'hide'}`}>
                {['2x2x2', '3x3x3', 'Other'].map(group => [
                    <li className='nav-subitem group' key={group}>{group}</li>,
                    this.getSubItems(group),
                ])}
            </ul>
        </div>;
    };
};

const Logo = ({ image }) => <Link to='/'><img className='logo' src={image} alt='SM Logo' /></Link>;

// TODO: move handlers to dropdown
class Nav extends React.Component {
    state = {
        displayMenu: false,
    };

    handleMenuToggle = () => {
        this.setState({
            displayMenu: !this.state.displayMenu,
        });
    };

    handleMenuShow = () => {
        this.setState({
            displayMenu: true,
        });
    };

    handleMenuHide = () => {
        this.setState({
            displayMenu: false,
        });
    };

    title = () => {
        const current = this.props.methods.filter(method => {
            if (this.props.url.endsWith(method.key)) {
                return method.name;
            } else {
                return false;
            }
        });

        let name = 'Unknown';
        if (current[0]) {
            name = current[0].name;
        }

        return name;
    };

    render() {
        return <nav onMouseLeave={this.handleMenuHide}>
            <Dropdown title={this.title} methods={this.props.methods} doMenuToggle={this.handleMenuToggle} doMenuShow={this.handleMenuShow} doMenuHide={this.handleMenuHide} displayMenu={this.state.displayMenu} />
        </nav>;
    };
};

class Header extends React.Component {
    render() {
        return <header>
            <Logo image={logo} />
            <Nav methods={this.props.methods} url={this.props.match.url} />
        </header>;
    };
};

export default withRouter(Header);