import SVG from './image.svg';
import { face } from '~/notations';

export default {
  SVG,
  algorithm: [
    face.m.one,
    face.u.two,
    face.m.one,
    [
      face.u.any,
      face.m.two,
      face.u.any,
    ],
  ],
  name: '1B & 1T [Back]',
};
