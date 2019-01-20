const method = {
    key: 'ortega',
    name: 'Ortega',
    stages: [{
        name: 'OLL Cases',
        cases: [{
            name: 'Sune',
            image: '2x2x2/oll/sune.jpg',
            algorithms: [
                '(R U R\' U) (R U2 R\')',
            ],
        }, {
            name: 'Antisune',
            image: '2x2x2/oll/antisune.jpg',
            algorithms: [
                'R U2 (R\' U\' R U\') R\'',
            ],
        }, {
            name: 'A',
            image: '2x2x2/oll/a.jpg',
            algorithms: [
                'R2 U2 R\' U2 R2',
            ],
        }, {
            name: 'B',
            image: '2x2x2/oll/b.jpg',
            algorithms: [
                'F (R U R\' U\') (R U R\' U\') F\'',
            ],
        }, {
            name: 'C',
            image: '2x2x2/oll/c.jpg',
            algorithms: [
                'F (R U R\' U\') F\'',
            ],
        }, {
            name: 'D',
            image: '2x2x2/oll/d.jpg',
            algorithms: [
                '(R U R\' U\') (R\' F R F\')',
            ],
        }, {
            name: 'E',
            image: '2x2x2/oll/e.jpg',
            algorithms: [
                'F R U\' (R\' U\' R U) R\' F\'',
            ],
        }],
    }, {
        name: 'Basic',
        cases: [{
            name: 'Last',
            image: '2x2x2/basic/last.jpg',
            algorithms: [
                '(R\' U R\') D2 (R U\' R\') DR R2',
            ],
        }],
    }, {
        name: 'PBL Cases',
        cases: [{
            name: 'A',
            image: '2x2x2/pbl/a.jpg',
            columns: 'two',
            algorithms: [
                '(R U R\' U\') R\' F R2 U\' (R\' U\' R U) R\' F\'',
            ],
        }, {
            name: 'B',
            image: '2x2x2/pbl/b.jpg',
            columns: 'two',
            algorithms: [
                '(R U\' R\' U\') F2 (U\' R U R\') D R2',
            ],
        }, {
            name: 'C',
            image: '2x2x2/pbl/c.jpg',
            columns: 'two',
            algorithms: [
                'R2 U\' B2 (U2 R2 U\' R2)',
            ],
        }, {
            name: 'D',
            image: '2x2x2/pbl/d.jpg',
            columns: 'two',
            algorithms: [
                '(R U\' R) F2 (R\' U R\')',
            ],
        }, {
            name: 'E',
            image: '2x2x2/pbl/e.jpg',
            columns: 'two',
            algorithms: [
                'R2 F2 R2',
            ],
        }],
    }],
};

export default method;