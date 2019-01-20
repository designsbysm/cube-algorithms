const method = {
    key: '4lll',
    name: '4LLL',
    stages: [{
        name: 'OLL Corner Cases',
        cases: [{
            name: 'Sune',
            image: '3x3x3/oll/corner-sune.jpg',
            algorithms: [
                '(R U R\' U) (R U2 R\')',
            ],
        }, {
            name: 'Antisune',
            image: '3x3x3/oll/corner-antisune.jpg',
            algorithms: [
                'R U2 (R\' U\' R U\') R\'',
            ],
        }, {
            name: 'A',
            image: '3x3x3/oll/corner-a.jpg',
            algorithms: [
                '(R U2) (R\' U\' R U) (R\' U\' R U\') R\'',
                'F (R U R\' U\')3 F\'',
            ],
        }, {
            name: 'B',
            image: '3x3x3/oll/corner-b.jpg',
            algorithms: [
                'R U2 (R2 U\' R2 U\') R2 U2 R',
            ],
        }, {
            name: 'C',
            image: '3x3x3/oll/corner-c.jpg',
            algorithms: [
                'R2 D\' (R U2 R\') D (R U2 R)',
            ],
        }, {
            name: 'D',
            image: '3x3x3/oll/corner-d.jpg',
            algorithms: [
                '(r U R\' U\') (r\' F R F\')',
            ],
        }, {
            name: 'E',
            image: '3x3x3/oll/corner-e.jpg',
            algorithms: [
                'F\' (r U R\' U\') (r\' F R)',
            ],
        }],
    }, {
        name: 'PLL Corner Cases',
        cases: [{
            name: 'J Perm',
            image: '3x3x3/pll/corner-jperm.jpg',
            algorithms: [
                '(R U R\') F\' (R U R\' U\') R\' F (R2 U\' R\')',
            ],
        }, {
            name: 'Cross',
            image: '3x3x3/pll/corner-cross.jpg',
            algorithms: [
                '(R\' U R U\') R\' F\' U\' F (R U R\') F R\' F\' (R U\' R)',
                '(R\' U L\' U2 R U\' L)2 U',
            ],
        }],
    }, {
        name: 'PLL Edge Cases',
        cases: [{
            name: 'B',
            image: '3x3x3/pll/edge-b.jpg',
            algorithms: [
                'F2 U M U2 M\' U F2',
            ],
        }, {
            name: 'A',
            image: '3x3x3/pll/edge-a.jpg',
            algorithms: [
                'F2 U\' M U2 M\' U\' F2',
            ],
        }, {

            name: 'C',
            image: '3x3x3/pll/edge-c.jpg',
            algorithms: [
                'M2 U M2 U2 M2 U M2',
            ],
        }, {
            name: 'D',
            image: '3x3x3/pll/edge-d.jpg',
            algorithms: [
                'M\' U (M2 U)2 M\' U2 M2 U\'',
            ],
        }],
    }],
};

export default method;