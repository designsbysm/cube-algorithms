import SVG from './image.svg';
import { face } from '~/notations';

export default {
  SVG,
  algorithm: [
    face.m.pri,
    [
      face.u.one,
      face.m.two,
      face.u.one,
      face.m.two,
    ],
    [
      face.u.one,
      face.m.pri,
      face.u.two,
      face.m.two,
    ],
  ],
  name: 'Z Perm',
};
