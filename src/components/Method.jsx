import React from 'react';
import { useLocation } from 'react-router-dom';

import Methods from '../methods';

const Method = ({ key }) => {
  const location = useLocation();
  const { pathname } = location;
  const stages = Methods.find(item => pathname.endsWith(item.key))?.stages;

  return (
    <main className='method'>
      <StageList stages={stages} />
    </main>
  );
};

const Case = ({ _case }) => {
  const { key, name, extension, algorithms } = _case;
  const source = require(`../images/${key}.${extension || 'svg'}`);

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

const CaseList = ({ cases }) => {
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

const Stage = ({ name, cases }) => {
  return (
    <div className='stage'>
      <h2>{name}</h2>
      <CaseList cases={cases} />
    </div>
  );
};

const StageList = ({ stages }) => {
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

export default Method;
