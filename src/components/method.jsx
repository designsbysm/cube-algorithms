import React from "react";

const Algorithm = ({ algorithm }) => <div className="algorithm">{algorithm}</div>;

const Case = ({ _case }) => {
  const { key, name, extension, algorithms } = _case;
  const source = require(`../images/${key}.${extension || "svg"}`);

  return (
    <div className="case">
      <img src={source} alt={name} />
      <div className="name">{name}</div>
      <Algorithm algorithm={algorithms[0]} />
    </div>
  );
};

const CaseList = ({ cases }) => (
  <div className="case-list">
    {cases.map(_case => (
      <Case key={_case.key} _case={_case} />
    ))}
  </div>
);

const Stage = ({ name, cases }) => (
  <div className="stage">
    <h2>{name}</h2>
    <CaseList cases={cases} />
  </div>
);

const StageList = ({ stages }) => (
  <div className="stage-list">
    {stages.map(stage => (
      <Stage key={stage.name} name={stage.name} cases={stage.cases} />
    ))}
  </div>
);

const Method = ({ stages }) => (
  <main className="method">
    <StageList stages={stages} />
  </main>
);

export default Method;
