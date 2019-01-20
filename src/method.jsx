import React from 'react';

const Algorithm = ({ algorithm }) =>
    <div className='algorithm'>
        {algorithm}
    </div>;

const Case = ({ name, image, columns, algorithms }) => {
    let img = 'https://dummyimage.com/300';
    if (image) {
        img = require(`./images/${image}`);
    }

    let classes = 'case';
    if (columns) {
        classes += ' two'
    } else {
        classes += ' one'
    }

    return (
        <div className={classes}>
            <img src={img} alt={name} />
            <Algorithm algorithm={algorithms[0]} />
        </div>);
};

const CaseList = ({ cases }) =>
    <div className='case-list'>
        {cases.map(_case =>
            <Case key={_case.name} name={_case.name} image={_case.image} columns={_case.columns} algorithms={_case.algorithms} />
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

const Method = ({ name, stages }) =>
    <div className='method'>
        <h1>{name}</h1>
        <StageList stages={stages} />
    </div>;

// const MethodList = ({ methods }) =>
//     <div className='method-list'>
//         {methods.map(method =>
//             <Method key={method.name} name={method.name} stages={method.stages} />
//         )}
//     </div>;

export default Method;