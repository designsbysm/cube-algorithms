import oll from './cases/int/oll';
import basic from './cases/basic';

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