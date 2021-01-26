import { atomFamily } from 'recoil';
import { localStorageEffect } from '../effects/localStorageEffect';

/**
 * Represent single color choice of specific product
 */
export const stateColor = atomFamily<
  string /* color */,
  string /* recoil family key */
>({
  key: 'state-color',
  default: 'black',
  effects_UNSTABLE: (familyKey) => [
    localStorageEffect(`recoil-state-color~${familyKey}`),
  ],
});
