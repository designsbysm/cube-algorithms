import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

const Logo = () => {
  return (
    <Link to='/'>
      <img
        alt='SM Logo'
        className='logo'
        src={logo}
      />
    </Link>
  );
};

export default Logo;
