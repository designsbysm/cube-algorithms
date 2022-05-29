import SVG from './image.svg';
import { face } from '~/notations';

export default {
  SVG,
  algorithm: [
    face.r.two,
    face.d.pri,
    [
      face.r.one,
      face.u.two,
      face.r.pri,
    ],
    face.d.one,
    [
      face.r.one,
      face.u.two,
      face.r.one,
    ],
  ],
  name: 'Headlights',
};
