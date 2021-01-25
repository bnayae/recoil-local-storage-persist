import { atomFamily } from 'recoil';

/**
 * Represent single color choice of specific product
 */
export const stateColor = atomFamily<
  string /* color */,
  string /* recoil family key */
>({
  key: 'state-color',
  default: 'black',
});
