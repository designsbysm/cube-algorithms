const pllEdgeCases = {
  cases: [
    {
      algorithms: ['F2 U M U2 M\' U F2'],
      key: '3x3/4lll/pll/edge/uperma',
      name: 'U Prem: A',
    },
    {
      algorithms: ['F2 U\' M U2 M\' U\' F2'],
      key: '3x3/4lll/pll/edge/upermb',
      name: 'U Perm: B',
    },
    {
      algorithms: ['M2 U M2 U2 M2 U M2'],
      key: '3x3/4lll/pll/edge/hperm',
      name: 'H Prem',
    },
    {
      algorithms: ['M\' U (M2 U)2 M\' U2 M2 U\''],
      key: '3x3/4lll/pll/edge/zperm',
      name: 'Z Perm',
    },
  ],
  name: 'PLL Edge Cases',
};

export default pllEdgeCases;
