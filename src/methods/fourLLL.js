import fourlllOllEdge from './cases/fourlllOllEdge';
import fourlllOllCorner from './cases/fourlllOllCorner';
import fourlllPllCorner from './cases/fourlllPllCorner';
import fourlllPllEdge from './cases/fourlllPllEdge';

export default {
    key: 'fourlll',
    name: '4LLL',
    stages: [{
        name: 'OLL Edge Cases',
        cases: fourlllOllEdge,
    }, {
        name: 'OLL Corner Cases',
        cases: fourlllOllCorner,
    }, {
        name: 'PLL Corner Cases',
        cases: fourlllPllCorner,
    }, {
        name: 'PLL Edge Cases',
        cases: fourlllPllEdge,
    }],
};