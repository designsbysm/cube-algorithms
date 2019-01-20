const method = {
    key: '/',
    name: 'Roux (Intermediate)',
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
        name: 'EO Cases',
        cases: [{
            name: 'Arrow Front',
            image: '3x3x3/eo/arrow-front.jpg',
            algorithms: [
                'M\' U\' M\'',
            ],
        }, {
            name: 'Arrow Back',
            image: '3x3x3/eo/arrow-back.jpg',
            algorithms: [
                'M U M',
            ],
        }, {
            name: 'TB Swap Front',
            image: '3x3x3/eo/tb-swap.jpg',
            algorithms: [
                '[F] M\' U2 M',
            ],
        }, {
            name: 'TB Swap Back',
            image: '3x3x3/eo/tb-swap.jpg',
            algorithms: [
                '[B] M U2 M\'',
            ],
        }],
        // }, {
        //     name: 'LR Cases',
        //     cases: [{
        //         name: 'A',
        //         image: '',
        //         algorithms: [
        //             '',
        //         ],
        //     }, {
        //         name: 'B',
        //         image: '',
        //         algorithms: [
        //             '',
        //         ],
        //     }],
    }, {
        name: 'EP Cases',
        cases: [{
            name: 'Bars',
            image: '3x3x3/ep/bars-columns.jpg',
            algorithms: [
                '[F] M2 U2 M2 U2',
            ],
        }, {
            name: 'Columns',
            image: '3x3x3/ep/bars-columns.jpg',
            algorithms: [
                '[T] M\' U2 M2 U2 M\'',
            ],
        }, {
            name: 'Dots',
            image: '3x3x3/ep/dots.jpg',
            algorithms: [
                'E2 M E2 M\'',
            ],
        }],
    }],
};

export default method;