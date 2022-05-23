import React from 'react';

import Dropdown from './Dropdown';
import Logo from './Logo';

const Header = () => {
  return (
    <header>
      <Logo />
      <nav>
        <Dropdown />
      </nav>
    </header >
  );
};

export default Header;
