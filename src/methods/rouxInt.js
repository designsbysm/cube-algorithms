import fourlllOllCorner from './cases/fourlllOllCorner';
import fourlllPllCorner from './cases/fourlllPllCorner';
import rouxEO from './cases/rouxEO';
import rouxEP from './cases/rouxEP';

export default {
    key: 'rouxInt',
    name: 'Roux (Intermediate)',
    stages: [{
        name: 'OLL Corner Cases',
        cases: fourlllOllCorner,
    }, {
        name: 'PLL Corner Cases',
        cases: fourlllPllCorner,
    }, {
        name: 'EO Cases',
        cases: rouxEO,
    }, {
        name: 'EP Cases',
        cases: rouxEP,
    }],
};