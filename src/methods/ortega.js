import twoByTwoIntOll from './cases/twoByIntOll';
import ortegaPBL from './cases/ortegaPBL';

export default {
    key: 'ortega',
    name: 'Ortega',
    stages: [{
        name: 'OLL Cases',
        cases: twoByTwoIntOll,
    }, {
        name: 'PBL Cases',
        cases: ortegaPBL,
    }],
};