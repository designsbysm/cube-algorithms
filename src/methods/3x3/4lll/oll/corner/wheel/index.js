import SVG from './image.svg';
import { face } from '~/notations';

export default {
  SVG,
  algorithm: [
    face.r.one,
    face.u.two,
    [
      face.r.two,
      face.u.pri,
      face.r.two,
      face.u.pri,
    ],
    face.r.two,
    face.u.two,
    face.r.one,
  ],
  name: 'Wheel',
};
