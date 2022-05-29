import SVG from './image.svg';
import { face } from '~/notations';

export default {
  SVG,
  algorithm: [
    face.f.one,
    [
      face.u.one,
      face.r.one,
      face.u.pri,
      face.r.pri,
    ],
    face.f.pri,
  ],
  name: 'Ell',
};
