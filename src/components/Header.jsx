import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import { faAngleDown } from '@fortawesome/pro-regular-svg-icons';

import Methods from '../methods';

const Header = ({ logo }) => {
  return (
    <header>
      <Logo image={logo} />
      <Nav />
    </header >
  );
};

const Dropdown = () => {
  const [
    visible,
    setVisible,
  ] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const title = getTitle(Methods, pathname);

  return (
    <div
      className='nav-item'
      onClick={() => {
        setVisible(current => !current);
      }}
      onMouseEnter={() => {
        setVisible(true);
      }}
      onMouseLeave={() => {
        setVisible(false);
      }}>
      <div className='title'>
        {title}
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <ul className={`dropdown ${visible ? 'show' : 'hide'}`}>
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
          getSubItems(group, setVisible),
        ])}
      </ul>
    </div>
  );
};

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

const Nav = () => {
  return (
    <nav>
      <Dropdown />
    </nav>
  );
};

const getSubItems = (group, hideMenu) => {
  return Methods
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

const getTitle = (methods, url) =>
  methods
    .filter(method => url === `/${method.key}`)
    .map(method => method.name)
    .slice(0, 1)
    .reduce((accumulator, currentValue) => currentValue, 'Unknown');

export default Header;
