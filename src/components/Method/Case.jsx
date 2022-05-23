import React from 'react';

const Case = ({ _case }) => {
  const { key, name, extension, algorithms } = _case;
  const source = require(`../../images/${key}.${extension || 'svg'}`);

  return (
    <div className='case'>
      <img
        alt={name}
        src={source}
      />
      <div className='name'>{name}</div>
      <div className='algorithm'>{algorithms[0]}</div>
    </div>
  );
};

export default Case;
