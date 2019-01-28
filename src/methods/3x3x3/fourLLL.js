import edgeOLL from './cases/4lll/oll/edge';
import cornerOLL from './cases/4lll/oll/corner';
import cornerPLL from './cases/4lll/pll/corner';
import edgePLL from './cases/4lll/pll/edge';

export default {
    key: 'fourlll',
    group: '3x3x3',
    name: '4LLL',
    stages: [{
        name: 'OLL Edge Cases',
        cases: edgeOLL,
    }, {
        name: 'OLL Corner Cases',
        cases: cornerOLL,
    }, {
        name: 'PLL Corner Cases',
        cases: cornerPLL,
    }, {
        name: 'PLL Edge Cases',
        cases: edgePLL,
    }],
};