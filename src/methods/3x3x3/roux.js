import cornerOLL from "./cases/4lll/oll/corner";
import cornerPLL from "./cases/4lll/pll/corner";
import rouxEO from "./cases/roux/eo";
import rouxLR from "./cases/roux/lr";
import rouxEP from "./cases/roux/ep";

export default {
  key: "roux",
  group: "3x3x3",
  name: "Roux",
  stages: [
    cornerOLL,
    cornerPLL,
    rouxEO,
    rouxLR,
    rouxEP, 
  ],
};
