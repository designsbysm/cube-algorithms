import oll from './cases/2x2/int/oll';
import pbl from './cases/2x2/ortega/pbl';

export default {
    key: 'ortega',
    group: '2x2',
    name: 'Ortega',
    stages: [{
        name: 'OLL Cases',
        cases: oll,
    }, {
        name: 'PBL Cases',
        cases: pbl,
    }],
};