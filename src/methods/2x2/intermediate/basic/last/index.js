import SVG from './image.svg';
import { face } from '~/notations';

export default {
  SVG,
  algorithm: [
    [
      face.r.pri,
      face.u.one,
      face.r.pri,
    ],
    face.d.two,
    [
      face.r.one,
      face.u.pri,
      face.r.pri,
    ],
    face.d.two,
    face.r.two,
  ],
  name: 'Last',
};
