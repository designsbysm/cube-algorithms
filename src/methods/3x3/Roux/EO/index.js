import Arrow from './Arrow';
import B1T1 from './B1T1';
import B2 from './B2';
import T1B1 from './T1B1';
import T2Adjacent from './T2-Adjacent';
import T2B2Adjacent from './T2B2-Adjacent';
import T2B2Opposite from './T2B2-Opposite';
import T2Opposite from './T2-Opposite';
import T4 from './T4';
import T4B2 from './T4B2';

export default {
  cases: [
    Arrow,
    T2Opposite,
    T2Adjacent,
    B2,
    B1T1,
    T1B1,
    T2B2Opposite,
    T2B2Adjacent,
    T4,
    T4B2,
  ],
  name: 'EO Cases',
};
