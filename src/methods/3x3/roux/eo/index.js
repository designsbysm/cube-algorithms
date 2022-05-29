import arrow from './arrow';
import b1t1 from './b1+t1';
import b2 from './b2';
import t1b1 from './t1+b1';
import t2Adjacent from './t2-adjacent';
import t2b2Adjacent from './t2+b2-adjacent';
import t2b2Opposite from './t2+b2-opposite';
import t2Opposite from './t2-opposite';
import t4 from './t4';
import t4b2 from './t4+b2';

export default {
  cases: [
    arrow,
    t2Opposite,
    t2Adjacent,
    b2,
    b1t1,
    t1b1,
    t2b2Opposite,
    t2b2Adjacent,
    t4,
    t4b2,
  ],
  name: 'EO Cases',
};
