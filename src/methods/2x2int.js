import oll from './cases/2x2/int/oll';
import basic from './cases/2x2/basic';

export default {
    key: 'twoByTwoInt',
    group: '2x2',
    name: 'Intermediate',
    stages: [{
        name: 'OLL Cases',
        cases: oll,
    }, {
        name: 'Basic',
        cases: basic,
    }],
};