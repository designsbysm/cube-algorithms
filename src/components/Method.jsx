import React from 'react';
import { useLocation } from 'react-router-dom';

import methods from '../methods';

const Algorithm = ({ algorithm }) => <div className='algorithm'>{algorithm}</div>;

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
      <Algorithm algorithm={algorithms[0]} />
    </div>
  );
};

const CaseList = ({ cases }) => (
  <div className='case-list'>
    {cases.map(_case => (
      <Case
        _case={_case}
        key={_case.key}
      />
    ))}
  </div>
);

const Stage = ({ name, cases }) => (
  <div className='stage'>
    <h2>{name}</h2>
    <CaseList cases={cases} />
  </div>
);

const StageList = ({ stages }) => (
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

const Method = ({ key }) => {
  const location = useLocation();
  const { pathname } = location;
  const stages = methods.find(item => pathname.endsWith(item.key))?.stages;

  return (
    <main className='method'>
      <StageList stages={stages} />
    </main>
  );
};

export default Method;
