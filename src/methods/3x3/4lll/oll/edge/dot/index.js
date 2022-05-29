import SVG from './image.svg';
import { face, side } from '~/notations';

export default {
  SVG,
  algorithm: [
    face.f.one,
    [
      face.r.one,
      face.u.one,
      face.r.pri,
      face.u.pri,
    ],
    face.s.one,
    [
      face.r.one,
      face.u.one,
      face.r.pri,
      face.u.pri,
    ],
    side.f.pri,
  ],
  name: 'Dot',
};
