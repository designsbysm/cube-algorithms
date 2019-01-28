import ornerOLL from './cases/4lll/oll/corner';
import cornerPLL from './cases/4lll/pll/corner';
import rouxEO from './cases/roux/eo';
import rouxEP from './cases/roux/ep';

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