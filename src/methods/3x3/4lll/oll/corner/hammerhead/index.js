import SVG from './image.svg';
import { face, side } from '~/notations';

export default {
  SVG,
  algorithm: [
    [
      side.r.one,
      face.u.one,
      face.r.pri,
      face.u.pri,
    ],
    [
      side.r.pri,
      face.f.one,
      face.r.one,
      face.f.pri,
    ],
  ],
  name: 'Hammerhead',
};
