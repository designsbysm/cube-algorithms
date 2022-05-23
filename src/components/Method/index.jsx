import React from 'react';
import { useLocation } from 'react-router-dom';

import Stages from './Stages';
import Methods from '../../methods';

const Method = ({ key }) => {
  const location = useLocation();
  const { pathname } = location;
  const stages = Methods.find(item => pathname.endsWith(item.key))?.stages;

  return (
    <main className='method'>
      <Stages stages={stages} />
    </main>
  );
};

export default Method;
