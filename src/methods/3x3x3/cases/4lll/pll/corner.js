export default {
  name: "PLL Corner Cases",
  cases: [
    {
      key: "3x3x3/4lll/pll/corner/jperm",
      name: "J Perm",
      algorithms: [ "(R U R') F' (R U R' U') R' F (R2 U' R')" ],
    },
    {
      key: "3x3x3/4lll/pll/corner/nperm",
      name: "N Perm",
      algorithms: [
        "(R' U R U') R' F' U' F (R U R') F R' F' (R U' R)",
        "(R' U L' U2 R U' L)2 U",
      ],
    },
  ],
};
