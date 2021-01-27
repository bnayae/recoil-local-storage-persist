import { atomFamily } from 'recoil';
import { effectStrategy } from '../effects';

/**
 * Represent single color choice of specific product
 */
export const stateColor = atomFamily<
  string /* color */,
  string /* recoil family key */
>({
  key: 'state-color',
  default: 'black',
  effects_UNSTABLE: (familyKey) => [effectStrategy(familyKey, 'color')],
});
