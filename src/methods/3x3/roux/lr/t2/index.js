import SVG from './image.svg';
import { face } from '~/notations';

export default {
  SVG,
  algorithm: [
    face.m.two,
    [
      face.u.any,
      face.m.pri,
      face.u.two,
    ],
    face.m.one,
    [
      face.u.any,
      face.m.two,
      face.u.any,
    ],
  ],
  name: '2T',
};
