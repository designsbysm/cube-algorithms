import SVG from './image.svg';
import { face } from '~/notations';

export default {
  SVG,
  algorithm: [
    [
      face.r.one,
      face.u.one,
      face.r.pri,
      face.u.pri,
    ],
    face.r.pri,
    face.f.one,
    face.r.two,
    face.u.pri,
    [
      face.r.pri,
      face.u.pri,
      face.r.one,
      face.u.one,
    ],
    face.r.pri,
    face.f.pri,
  ],
  name: 'UR',
};
