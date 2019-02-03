export default {
    name: 'OLL Edge Cases',
    cases: [{
        key: '3x3x3/4lll/oll/edge/bar',
        name: 'Bar',
        algorithms: [
            'F (R U R\' U\') F\'',
        ],
    }, {
        key: '3x3x3/4lll/oll/edge/ell',
        name: 'Ell',
        algorithms: [
            'F (U R U\' R\') F\'',
        ],
    }, {
        key: '3x3x3/4lll/oll/edge/dot',
        name: 'Dot',
        algorithms: [
            'F (R U R\' U\') S (R U R\' U\') f\'',
        ],
    }],
};