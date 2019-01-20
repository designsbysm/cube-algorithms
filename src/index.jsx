import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const methods = [{
    name: 'Roux Intermediate',
    stages: [{
        name: 'OLL Corner Cases',
        cases: [{
            name: 'Sune',
            image: '3x3x3/oll/corner-sune.jpg',
            algorithms: [
                '(R U R\' U) (R U2 R\')',
            ],
        }, {
            name: 'Antisune',
            image: '3x3x3/oll/corner-antisune.jpg',
            algorithms: [
                'R U2 (R\' U\' R U\') R\'',
            ],
        }, {
            name: 'A',
            image: '3x3x3/oll/corner-a.jpg',
            algorithms: [
                '(R U2) (R\' U\' R U) (R\' U\' R U\') R\'',
                'F (R U R\' U\')3 F\'',
            ],
        }, {
            name: 'B',
            image: '3x3x3/oll/corner-b.jpg',
            algorithms: [
                'R U2 (R2 U\' R2 U\') R2 U2 R',
            ],
        }, {
            name: 'C',
            image: '3x3x3/oll/corner-c.jpg',
            algorithms: [
                'R2 D\' (R U2 R\') D (R U2 R)',
            ],
        }, {
            name: 'D',
            image: '3x3x3/oll/corner-d.jpg',
            algorithms: [
                '(r U R\' U\') (r\' F R F\')',
            ],
        }, {
            name: 'E',
            image: '3x3x3/oll/corner-e.jpg',
            algorithms: [
                'F\' (r U R\' U\') (r\' F R)',
            ],
        }],
    }, {
        name: 'PLL Corner Cases',
        cases: [{
            name: 'J Perm',
            image: '3x3x3/pll/corner-jperm.jpg',
            algorithms: [
                '(R U R\') F (R U R\' U\') R\' F (R2 U\' R\')',
            ],
        }, {
            name: 'Cross',
            image: '3x3x3/pll/corner-cross.jpg',
            algorithms: [
                '(R\' U R U\') R\' F\' U\' F (R U R\') F R\' F\' (R U\' R)',
                '(R\' U L\' U2 R U\' L)2 U',
            ],
        }],
    }, {
        name: 'EO Cases',
        cases: [{
            name: 'Arrow Front',
            image: '3x3x3/eo/arrow-front.jpg',
            algorithms: [
                'M\' U\' M\'',
            ],
        }, {
            name: 'Arrow Back',
            image: '3x3x3/eo/arrow-back.jpg',
            algorithms: [
                'M U M',
            ],
        }, {
            name: 'TB Swap Front',
            image: '3x3x3/eo/tb-swap.jpg',
            algorithms: [
                '[F] M\' U2 M',
            ],
        }, {
            name: 'TB Swap Back',
            image: '3x3x3/eo/tb-swap.jpg',
            algorithms: [
                '[B] M U2 M\'',
            ],
        }],
        // }, {
        //     name: 'LR Cases',
        //     cases: [{
        //         name: 'A',
        //         image: '',
        //         algorithms: [
        //             '',
        //         ],
        //     }, {
        //         name: 'B',
        //         image: '',
        //         algorithms: [
        //             '',
        //         ],
        //     }],
    }, {
        name: 'EP Cases',
        cases: [{
            name: 'Bars',
            image: '3x3x3/ep/bars-columns.jpg',
            algorithms: [
                '[F] M2 U2 M2 U2',
            ],
        }, {
            name: 'Columns',
            image: '3x3x3/ep/bars-columns.jpg',
            algorithms: [
                '[T] M\' U2 M2 U2 M\'',
            ],
        }, {
            name: 'Dots',
            image: '3x3x3/ep/dots.jpg',
            algorithms: [
                'E2 M E2 M\'',
            ],
        }],
    }],
}];

const Algorithm = ({ algorithm }) =>
    <div className='algorithm'>
        {algorithm}
    </div>;

const Case = ({ name, image, algorithms }) => {
    let img = 'https://dummyimage.com/300';

    if (image) {
        img = require(`./images/${image}`);
    }

    return (
        <div className='case'>
            <img src={img} alt={name} />
            <Algorithm algorithm={algorithms[0]} />
        </div>);
};

const CaseList = ({ cases }) =>
    <div className='case-list'>
        {cases.map(_case =>
            <Case key={_case.name} name={_case.name} image={_case.image} algorithms={_case.algorithms} />
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

const MethodList = ({ methods }) =>
    <div className='method-list'>
        {methods.map(method =>
            <Method key={method.name} name={method.name} stages={method.stages} />
        )}
    </div>;

ReactDOM.render(
    <MethodList methods={methods} />,
    document.getElementById('root')
);
