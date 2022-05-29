import SVG from './image.svg';
import { face } from '~/notations';

export default {
  SVG,
  algorithm: [
    [
      face.r.pri,
      face.u.one,
      face.r.one,
      face.u.pri,
    ],
    face.r.pri,
    face.f.pri,
    face.u.pri,
    face.f.one,
    [
      face.r.one,
      face.u.one,
      face.r.pri,
    ],
    face.f.one,
    face.r.pri,
    face.f.pri,
    [
      face.r.one,
      face.u.pri,
      face.r.one,
    ],
  ],
  name: 'N Perm',
};
