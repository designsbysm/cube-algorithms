import React from 'react';

import Cases from './Cases';

const Stage = ({ name, cases }) => {
  return (
    <div className='stage'>
      <h2>{name}</h2>
      <Cases cases={cases} />
    </div>
  );
};

export default Stage;
