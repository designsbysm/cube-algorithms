const ollCornerCases = {
  cases: [
    {
      algorithms: ['(R U R\' U) (R U2 R\')'],
      key: '3x3/4lll/oll/corner/sune',
      name: 'Sune',
    },
    {
      algorithms: ['(R U2 R\') (U\' R U\' R\')'],
      key: '3x3/4lll/oll/corner/antisune',
      name: 'Antisune',
    },
    {
      algorithms: [
        'R U2 (R\' U\' R U) (R\' U\' R U\') R\'',
        'F (R U R\' U\')3 F\'',
      ],
      key: '3x3/4lll/oll/corner/cross',
      name: 'Cross',
    },
    {
      algorithms: ['R U2 (R2 U\' R2 U\') R2 U2 R'],
      key: '3x3/4lll/oll/corner/wheel',
      name: 'Wheel',
    },
    {
      algorithms: ['R2 D\' (R U2 R\') D (R U2 R)'],
      key: '3x3/4lll/oll/corner/headlights',
      name: 'Headlights',
    },
    {
      algorithms: ['(r U R\' U\') (r\' F R F\')'],
      key: '3x3/4lll/oll/corner/hammerhead',
      name: 'Hammerhead',
    },
    {
      algorithms: ['F\' (r U R\' U\') (r\' F R)'],
      key: '3x3/4lll/oll/corner/bowtie',
      name: 'Bowtie',
    },
  ],
  name: 'OLL Corner Cases',
};

export default ollCornerCases;
