import oll from './cases/intermediate/oll';
import pbl from './cases/ortega/pbl';

export default {
    key: 'ortega',
    group: '2x2x2',
    name: 'Ortega',
    stages: [{
        name: 'OLL Cases',
        cases: oll,
    }, {
        name: 'PBL Cases',
        cases: pbl,
    }],
};