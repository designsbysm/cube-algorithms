import hPerm from './h-perm';
import uPermCW from './u-perm-cw';
import uPermCCW from './u-perm-ccw';
import zPerm from './z-perm';

export default {
  cases: [
    uPermCW,
    uPermCCW,
    hPerm,
    zPerm,
  ],
  name: 'PLL Edge Cases',
};
