import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Method from './method';
import './index.scss';

// const methods = [{
//     name: 'Ortega',
//     stages: [{
//         name: 'OLL Cases',
//         cases: [{
//             name: 'Sune',
//             image: '2x2x2/oll/sune.jpg',
//             algorithms: [
//                 '(R U R\' U) (R U2 R\')',
//             ],
//         }, {
//             name: 'Antisune',
//             image: '2x2x2/oll/antisune.jpg',
//             algorithms: [
//                 'R U2 (R\' U\' R U\') R\'',
//             ],
//         }, {
//             name: 'A',
//             image: '2x2x2/oll/a.jpg',
//             algorithms: [
//                 'R2 U2 R\' U2 R2',
//             ],
//         }, {
//             name: 'B',
//             image: '2x2x2/oll/b.jpg',
//             algorithms: [
//                 'F (R U R\' U\') (R U R\' U\') F\'',
//             ],
//         }, {
//             name: 'C',
//             image: '2x2x2/oll/c.jpg',
//             algorithms: [
//                 'F (R U R\' U\') F\'',
//             ],
//         }, {
//             name: 'D',
//             image: '2x2x2/oll/d.jpg',
//             algorithms: [
//                 '(R U R\' U\') (R\' F R F\')',
//             ],
//         }, {
//             name: 'E',
//             image: '2x2x2/oll/e.jpg',
//             algorithms: [
//                 'F R U\' (R\' U\' R U) R\' F\'',
//             ],
//         }],
//     }, {
//         name: 'Basic',
//         cases: [{
//             name: 'Last',
//             image: '2x2x2/basic/last.jpg',
//             algorithms: [
//                 '(R\' U R\') D2 (R U\' R\') DR R2',
//             ],
//         }],
//     }, {
//         name: 'PBL Cases',
//         cases: [{
//             name: 'A',
//             image: '2x2x2/pbl/a.jpg',
//             columns: 'two',
//             algorithms: [
//                 '(R U R\' U\') R\' F R2 U\' (R\' U\' R U) R\' F\'',
//             ],
//         }, {
//             name: 'B',
//             image: '2x2x2/pbl/b.jpg',
//             columns: 'two',
//             algorithms: [
//                 '(R U\' R\' U\') F2 (U\' R U R\') D R2',
//             ],
//         }, {
//             name: 'C',
//             image: '2x2x2/pbl/c.jpg',
//             columns: 'two',
//             algorithms: [
//                 'R2 U\' B2 (U2 R2 U\' R2)',
//             ],
//         }, {
//             name: 'D',
//             image: '2x2x2/pbl/d.jpg',
//             columns: 'two',
//             algorithms: [
//                 '(R U\' R) F2 (R\' U R\')',
//             ],
//         }, {
//             name: 'E',
//             image: '2x2x2/pbl/e.jpg',
//             columns: 'two',
//             algorithms: [
//                 'R2 F2 R2',
//             ],
//         }],
//     }],
// }, {
//     name: '4LLL',
//     stages: [{
//         name: 'OLL Corner Cases',
//         cases: [{
//             name: 'Sune',
//             image: '3x3x3/oll/corner-sune.jpg',
//             algorithms: [
//                 '(R U R\' U) (R U2 R\')',
//             ],
//         }, {
//             name: 'Antisune',
//             image: '3x3x3/oll/corner-antisune.jpg',
//             algorithms: [
//                 'R U2 (R\' U\' R U\') R\'',
//             ],
//         }, {
//             name: 'A',
//             image: '3x3x3/oll/corner-a.jpg',
//             algorithms: [
//                 '(R U2) (R\' U\' R U) (R\' U\' R U\') R\'',
//                 'F (R U R\' U\')3 F\'',
//             ],
//         }, {
//             name: 'B',
//             image: '3x3x3/oll/corner-b.jpg',
//             algorithms: [
//                 'R U2 (R2 U\' R2 U\') R2 U2 R',
//             ],
//         }, {
//             name: 'C',
//             image: '3x3x3/oll/corner-c.jpg',
//             algorithms: [
//                 'R2 D\' (R U2 R\') D (R U2 R)',
//             ],
//         }, {
//             name: 'D',
//             image: '3x3x3/oll/corner-d.jpg',
//             algorithms: [
//                 '(r U R\' U\') (r\' F R F\')',
//             ],
//         }, {
//             name: 'E',
//             image: '3x3x3/oll/corner-e.jpg',
//             algorithms: [
//                 'F\' (r U R\' U\') (r\' F R)',
//             ],
//         }],
//     }, {
//         name: 'PLL Corner Cases',
//         cases: [{
//             name: 'J Perm',
//             image: '3x3x3/pll/corner-jperm.jpg',
//             algorithms: [
//                 '(R U R\') F\' (R U R\' U\') R\' F (R2 U\' R\')',
//             ],
//         }, {
//             name: 'Cross',
//             image: '3x3x3/pll/corner-cross.jpg',
//             algorithms: [
//                 '(R\' U R U\') R\' F\' U\' F (R U R\') F R\' F\' (R U\' R)',
//                 '(R\' U L\' U2 R U\' L)2 U',
//             ],
//         }],
//     }, {
//         name: 'PLL Edge Cases',
//         cases: [{
//             name: 'B',
//             image: '3x3x3/pll/edge-b.jpg',
//             algorithms: [
//                 'F2 U M U2 M\' U F2',
//             ],
//         }, {
//             name: 'A',
//             image: '3x3x3/pll/edge-a.jpg',
//             algorithms: [
//                 'F2 U\' M U2 M\' U\' F2',
//             ],
//         }, {

//             name: 'C',
//             image: '3x3x3/pll/edge-c.jpg',
//             algorithms: [
//                 'M2 U M2 U2 M2 U M2',
//             ],
//         }, {
//             name: 'D',
//             image: '3x3x3/pll/edge-d.jpg',
//             algorithms: [
//                 'M\' U (M2 U)2 M\' U2 M2 U\'',
//             ],
//         }],
//     }],
// }, {
//     name: 'Roux Intermediate',
//     stages: [{
//         name: 'OLL Corner Cases',
//         cases: [{
//             name: 'Sune',
//             image: '3x3x3/oll/corner-sune.jpg',
//             algorithms: [
//                 '(R U R\' U) (R U2 R\')',
//             ],
//         }, {
//             name: 'Antisune',
//             image: '3x3x3/oll/corner-antisune.jpg',
//             algorithms: [
//                 'R U2 (R\' U\' R U\') R\'',
//             ],
//         }, {
//             name: 'A',
//             image: '3x3x3/oll/corner-a.jpg',
//             algorithms: [
//                 '(R U2) (R\' U\' R U) (R\' U\' R U\') R\'',
//                 'F (R U R\' U\')3 F\'',
//             ],
//         }, {
//             name: 'B',
//             image: '3x3x3/oll/corner-b.jpg',
//             algorithms: [
//                 'R U2 (R2 U\' R2 U\') R2 U2 R',
//             ],
//         }, {
//             name: 'C',
//             image: '3x3x3/oll/corner-c.jpg',
//             algorithms: [
//                 'R2 D\' (R U2 R\') D (R U2 R)',
//             ],
//         }, {
//             name: 'D',
//             image: '3x3x3/oll/corner-d.jpg',
//             algorithms: [
//                 '(r U R\' U\') (r\' F R F\')',
//             ],
//         }, {
//             name: 'E',
//             image: '3x3x3/oll/corner-e.jpg',
//             algorithms: [
//                 'F\' (r U R\' U\') (r\' F R)',
//             ],
//         }],
//     }, {
//         name: 'PLL Corner Cases',
//         cases: [{
//             name: 'J Perm',
//             image: '3x3x3/pll/corner-jperm.jpg',
//             algorithms: [
//                 '(R U R\') F\' (R U R\' U\') R\' F (R2 U\' R\')',
//             ],
//         }, {
//             name: 'Cross',
//             image: '3x3x3/pll/corner-cross.jpg',
//             algorithms: [
//                 '(R\' U R U\') R\' F\' U\' F (R U R\') F R\' F\' (R U\' R)',
//                 '(R\' U L\' U2 R U\' L)2 U',
//             ],
//         }],
//     }, {
//         name: 'EO Cases',
//         cases: [{
//             name: 'Arrow Front',
//             image: '3x3x3/eo/arrow-front.jpg',
//             algorithms: [
//                 'M\' U\' M\'',
//             ],
//         }, {
//             name: 'Arrow Back',
//             image: '3x3x3/eo/arrow-back.jpg',
//             algorithms: [
//                 'M U M',
//             ],
//         }, {
//             name: 'TB Swap Front',
//             image: '3x3x3/eo/tb-swap.jpg',
//             algorithms: [
//                 '[F] M\' U2 M',
//             ],
//         }, {
//             name: 'TB Swap Back',
//             image: '3x3x3/eo/tb-swap.jpg',
//             algorithms: [
//                 '[B] M U2 M\'',
//             ],
//         }],
//         // }, {
//         //     name: 'LR Cases',
//         //     cases: [{
//         //         name: 'A',
//         //         image: '',
//         //         algorithms: [
//         //             '',
//         //         ],
//         //     }, {
//         //         name: 'B',
//         //         image: '',
//         //         algorithms: [
//         //             '',
//         //         ],
//         //     }],
//     }, {
//         name: 'EP Cases',
//         cases: [{
//             name: 'Bars',
//             image: '3x3x3/ep/bars-columns.jpg',
//             algorithms: [
//                 '[F] M2 U2 M2 U2',
//             ],
//         }, {
//             name: 'Columns',
//             image: '3x3x3/ep/bars-columns.jpg',
//             algorithms: [
//                 '[T] M\' U2 M2 U2 M\'',
//             ],
//         }, {
//             name: 'Dots',
//             image: '3x3x3/ep/dots.jpg',
//             algorithms: [
//                 'E2 M E2 M\'',
//             ],
//         }],
//     }],
// }];

const Index = () => {
    const method = {
        name: 'Roux (Intermediate)',
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
                    '(R U R\') F\' (R U R\' U\') R\' F (R2 U\' R\')',
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
    };

    return <Method name={method.name} stages={method.stages} />;
};
const Ortega = () => {
    const method = {
        name: 'Ortega',
        stages: [{
            name: 'OLL Cases',
            cases: [{
                name: 'Sune',
                image: '2x2x2/oll/sune.jpg',
                algorithms: [
                    '(R U R\' U) (R U2 R\')',
                ],
            }, {
                name: 'Antisune',
                image: '2x2x2/oll/antisune.jpg',
                algorithms: [
                    'R U2 (R\' U\' R U\') R\'',
                ],
            }, {
                name: 'A',
                image: '2x2x2/oll/a.jpg',
                algorithms: [
                    'R2 U2 R\' U2 R2',
                ],
            }, {
                name: 'B',
                image: '2x2x2/oll/b.jpg',
                algorithms: [
                    'F (R U R\' U\') (R U R\' U\') F\'',
                ],
            }, {
                name: 'C',
                image: '2x2x2/oll/c.jpg',
                algorithms: [
                    'F (R U R\' U\') F\'',
                ],
            }, {
                name: 'D',
                image: '2x2x2/oll/d.jpg',
                algorithms: [
                    '(R U R\' U\') (R\' F R F\')',
                ],
            }, {
                name: 'E',
                image: '2x2x2/oll/e.jpg',
                algorithms: [
                    'F R U\' (R\' U\' R U) R\' F\'',
                ],
            }],
        }, {
            name: 'Basic',
            cases: [{
                name: 'Last',
                image: '2x2x2/basic/last.jpg',
                algorithms: [
                    '(R\' U R\') D2 (R U\' R\') DR R2',
                ],
            }],
        }, {
            name: 'PBL Cases',
            cases: [{
                name: 'A',
                image: '2x2x2/pbl/a.jpg',
                columns: 'two',
                algorithms: [
                    '(R U R\' U\') R\' F R2 U\' (R\' U\' R U) R\' F\'',
                ],
            }, {
                name: 'B',
                image: '2x2x2/pbl/b.jpg',
                columns: 'two',
                algorithms: [
                    '(R U\' R\' U\') F2 (U\' R U R\') D R2',
                ],
            }, {
                name: 'C',
                image: '2x2x2/pbl/c.jpg',
                columns: 'two',
                algorithms: [
                    'R2 U\' B2 (U2 R2 U\' R2)',
                ],
            }, {
                name: 'D',
                image: '2x2x2/pbl/d.jpg',
                columns: 'two',
                algorithms: [
                    '(R U\' R) F2 (R\' U R\')',
                ],
            }, {
                name: 'E',
                image: '2x2x2/pbl/e.jpg',
                columns: 'two',
                algorithms: [
                    'R2 F2 R2',
                ],
            }],
        }],
    };

    return <Method name={method.name} stages={method.stages} />;
};

const FourLLL = () => {
    const method = {
        name: '4LLL',
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
                    '(R U R\') F\' (R U R\' U\') R\' F (R2 U\' R\')',
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
            name: 'PLL Edge Cases',
            cases: [{
                name: 'B',
                image: '3x3x3/pll/edge-b.jpg',
                algorithms: [
                    'F2 U M U2 M\' U F2',
                ],
            }, {
                name: 'A',
                image: '3x3x3/pll/edge-a.jpg',
                algorithms: [
                    'F2 U\' M U2 M\' U\' F2',
                ],
            }, {

                name: 'C',
                image: '3x3x3/pll/edge-c.jpg',
                algorithms: [
                    'M2 U M2 U2 M2 U M2',
                ],
            }, {
                name: 'D',
                image: '3x3x3/pll/edge-d.jpg',
                algorithms: [
                    'M\' U (M2 U)2 M\' U2 M2 U\'',
                ],
            }],
        }],
    };

    return <Method name={method.name} stages={method.stages} />;
};

const App = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Roux (Intermediate)</Link></li>
                    <li><Link to='/ortega/'>Ortega</Link></li>
                    <li><Link to='/4lll/'>4LLL</Link></li>
                </ul>
            </nav>

            <Route path='/' exact component={Index} />
            <Route path='/ortega/' component={Ortega} />
            <Route path='/4lll/' component={FourLLL} />
        </div>
    </Router>
);

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);