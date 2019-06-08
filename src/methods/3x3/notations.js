import cube from "./cases/notations/cube";
import face from "./cases/notations/face";
import side from "./cases/notations/side";

export default {
  group: "3x3",
  key: "notations",
  name: "Notations",
  stages: [
    face,
    side,
    cube, 
  ],
};
