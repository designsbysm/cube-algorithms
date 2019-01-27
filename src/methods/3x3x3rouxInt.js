import ornerOLL from './cases/3x3x3/4lll/oll/corner';
import cornerPLL from './cases/3x3x3/4lll/pll/corner';
import rouxEO from './cases/3x3x3/roux/eo';
import rouxEP from './cases/3x3x3/roux/ep';

export default {
    key: 'rouxInt',
    group: '3x3x3',
    name: 'Roux (Intermediate)',
    stages: [{
        name: 'OLL Corner Cases',
        cases: ornerOLL,
    }, {
        name: 'PLL Corner Cases',
        cases: cornerPLL,
    }, {
        name: 'EO Cases',
        cases: rouxEO,
    }, {
        name: 'EP Cases',
        cases: rouxEP,
    }],
};