import React from 'react';

import Case from './Case';

const Cases = ({ cases }) => {
  return (
    <div className='case-list'>
      {cases.map(_case => (
        <Case
          _case={_case}
          key={_case.key}
        />
      ))}
    </div>
  );
};

export default Cases;
