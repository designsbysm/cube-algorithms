import ornerOLL from './cases/4lll/oll/corner';
import cornerPLL from './cases/4lll/pll/corner';
import rouxEO from './cases/roux/eo';
import rouxLR from './cases/roux/lr';
import rouxEP from './cases/roux/ep';

export default {
    key: 'roux',
    group: '3x3x3',
    name: 'Roux',
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
        name: 'LR Cases',
        cases: rouxLR,
    }, {
        name: 'EP Cases',
        cases: rouxEP,
    }],
};