const ollCases = {
  cases: [
    {
      algorithms: ["(R U R' U) (R U2 R')"],
      key: "2x2/intermediate/oll/sune",
      name: "Sune",
    },
    {
      algorithms: ["(R U2 R') (U' R U' R')"],
      key: "2x2/intermediate/oll/antisune",
      name: "Antisune",
    },
    {
      algorithms: ["R2 U2 R' U2 R2"],
      key: "2x2/intermediate/oll/cross",
      name: "Cross",
    },
    {
      algorithms: ["F (R U R' U') (R U R' U') F'"],
      key: "2x2/intermediate/oll/wheel",
      name: "Wheel",
    },
    {
      algorithms: ["F (R U R' U') F'"],
      key: "2x2/intermediate/oll/headlights",
      name: "Headlights",
    },
    {
      algorithms: ["(R U R' U') (R' F R F')"],
      key: "2x2/intermediate/oll/hammerhead",
      name: "Hammerhead",
    },
    {
      algorithms: ["F R U' (R' U' R U) R' F'"],
      key: "2x2/intermediate/oll/bowtie",
      name: "Bowtie",
    },
  ],
  name: "OLL Cases",
};

export default ollCases;
