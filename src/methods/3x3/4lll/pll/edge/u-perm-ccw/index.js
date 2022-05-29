import SVG from './image.svg';
import { face } from '~/notations';

export default {
  SVG,
  algorithm: [
    face.f.two,
    [
      face.u.pri,
      face.m.one,
      face.u.two,
      face.m.pri,
    ],
    face.u.pri,
    face.f.two,
  ],
  name: 'U Perm [CCW]',
};
