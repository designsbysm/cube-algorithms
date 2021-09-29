const eoCases = {
  cases: [
    {
      algorithms: ["M* U' M'"],
      key: "3x3/roux/eo/arrow",
      name: "Arrow",
    },
    {
      algorithms: ["M' U M U' (M' U' M')"],
      key: "3x3/roux/eo/2t-a",
      name: "2T",
    },
    {
      algorithms: ["M' U M' U2 (M' U' M')"],
      key: "3x3/roux/eo/2t-b",
      name: "2T",
    },
    {
      algorithms: ["M' U M' U' (M U' M')"],
      key: "3x3/roux/eo/2b",
      name: "2B",
    },
    {
      algorithms: ["M U M U (M' U' M')"],
      key: "3x3/roux/eo/1b1t",
      name: "1B & 1T",
    },
    {
      algorithms: ["M' U' M' U' (M U' M')"],
      key: "3x3/roux/eo/1t1b",
      name: "1T & 1B",
    },
    {
      algorithms: ["M' U2 M' U2 (M U' M')"],
      key: "3x3/roux/eo/2t2b-a",
      name: "2T & 2B",
    },
    {
      algorithms: ["M2 U' (M' U' M')"],
      key: "3x3/roux/eo/2t2b-b",
      name: "2T & 2B",
    },
    {
      algorithms: ["M' U2 M' U2 (M' U' M')"],
      key: "3x3/roux/eo/4t",
      name: "4T",
    },
    {
      algorithms: ["R U' r' U' M' U r U r'"],
      key: "3x3/roux/eo/4t2b",
      name: "4T & 2B",
      // }, {
      //     key: '3x3/rouxBasic/eo/tb-swap-front',
      //     name: 'TB Swap [Front]',
      //     algorithms: [
      //         'M\' U2 M',
      //     ],
      // }, {
      //     key: '3x3/rouxBasic/eo/tb-swap-back',
      //     name: 'TB Swap [Back]',
      //     algorithms: [
      //         'M U2 M\'',
      //     ],
    },
  ],
  name: "EO Cases",
};

export default eoCases;
