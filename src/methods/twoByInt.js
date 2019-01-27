import twoByTwoBasic from './cases/twoByBasic';
import twoByTwoIntOll from './cases/twoByIntOll';

export default {
    key: 'twoByTwoInt',
    name: '2x2 (Intermediate)',
    stages: [{
        name: 'OLL Cases',
        cases: twoByTwoIntOll,
    }, {
        name: 'Basic',
        cases: twoByTwoBasic,
    }],
};