import React from 'react';

const Algorithm = ({ algorithm }) =>
    <div className='algorithm'>
        {algorithm}
    </div>;

const Case = ({ name, image, columns, algorithms }) => {
    const source = require(`../images/${image}`);
    const classes = columns ? `case ${columns}` : "case one";

    return (
        <div className={classes}>
            <img src={source} alt={name} />
            <div className='name'>{name}</div>
            <Algorithm algorithm={algorithms[0]} />
        </div>);
};

const CaseList = ({ cases }) =>
    <div className='case-list'>
        {cases.map(_case =>
            <Case key={_case.key} name={_case.name} image={`${_case.key}.jpg`} columns={_case.columns} algorithms={_case.algorithms} />
        )}
    </div>;

const Stage = ({ name, cases }) =>
    <div className='stage'>
        <h2>{name}</h2>
        <CaseList cases={cases} />
    </div>;

const StageList = ({ stages }) =>
    <div className='stage-list'>
        {stages.map(stage =>
            <Stage key={stage.name} name={stage.name} cases={stage.cases} />
        )}
    </div>;

const Method = ({ stages }) =>
    <main className='method'>
        <StageList stages={stages} />
    </main>;

export default Method;