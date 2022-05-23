import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/pro-regular-svg-icons';

import Methods from '../methods';

class Dropdown extends React.Component {
  state = {
    dropdownVisible: false,
  };

  getSubItems = (methods, group, hideMenu) => {
    return methods
      .filter(method => method.group === group)
      .map(method => (
        <li
          className='nav-subitem'
          key={method.key}
          onClick={hideMenu}>
          <Link to={method.key}>{method.name}</Link>
        </li>
      ));
  };

  handleMenuVisible = value => {
    this.setState(() => {
      return {
        dropdownVisible: value,
      };
    });
  };

  render() {
    return (
      <div
        className='nav-item'
        onClick={() => {
          this.handleMenuVisible(!this.state.dropdownVisible);
        }}
        onMouseEnter={() => {
          this.handleMenuVisible(true);
        }}
        onMouseLeave={() => {
          this.handleMenuVisible(false);
        }}>
        <div className='title'>
          {this.props.title}
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <ul className={`dropdown ${this.state.dropdownVisible ? 'show' : 'hide'}`}>
          {[
            '2x2',
            '3x3',
            'Other',
          ].map(group => [
            <li
              className='nav-subitem group'
              key={group}>
              {group}
            </li>,
            this.getSubItems(this.props.methods, group, this.handleMenuHide),
          ])}
        </ul>
      </div>
    );
  }
}

const Logo = ({ image }) => {
  return (
    <Link to='/'>
      <img
        alt='SM Logo'
        className='logo'
        src={image}
      />
    </Link>
  );
};

class Nav extends React.Component {
  title = (methods, url) =>
    methods
      .filter(method => url === `/${method.key}`)
      .map(method => method.name)
      .slice(0, 1)
      .reduce((accumulator, currentValue) => currentValue, 'Unknown');

  render() {
    const title = this.title(this.props.methods, this.props.url);

    return (
      <nav>
        <Dropdown
          methods={this.props.methods}
          title={title}
        />
      </nav>
    );
  }
}

const Header = ({ logo }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <header>
      <Logo image={logo} />
      <Nav
        methods={Methods}
        url={pathname}
      />
    </header >
  );
};
    
export default Header;
