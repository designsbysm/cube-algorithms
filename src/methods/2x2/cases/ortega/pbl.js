export default {
  cases: [
    {
      algorithms: [ "(R U R' U') R' F R2 U' (R' U' R U) R' F'" ],
      key: "2x2/ortega/pbl/ur",
      name: "UR",
    },
    {
      algorithms: [ "(R U' R' U') F2 (U' R U R') D R2" ],
      key: "2x2/ortega/pbl/u-diagonal",
      name: "U Diagonal",
    },
    {
      algorithms: [ "R2 U' B2 (U2 R2 U' R2)" ],
      key: "2x2/ortega/pbl/ub+db",
      name: "UB & DB",
    },
    {
      algorithms: [ "(R U' R) F2 (R' U R')" ],
      key: "2x2/ortega/pbl/u+d-diagonals",
      name: "U & D Diagonals",
    },
    {
      algorithms: [ "R2 F2 R2" ],
      key: "2x2/ortega/pbl/ub+d-diagonal",
      name: "UB & D Diagonal",
    },
  ],
  name: "PBL Cases",
};
