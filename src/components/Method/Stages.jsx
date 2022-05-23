import React from 'react';
import { useLocation } from 'react-router-dom';

import Stage from './Stage';

const Stages = ({ stages }) => {
  return (
    <div className='stage-list'>
      {stages.map(stage => (
        <Stage
          cases={stage.cases}
          key={stage.name}
          name={stage.name}
        />
      ))}
    </div>
  );
};

export default Stages;
