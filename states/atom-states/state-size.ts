import { atomFamily } from 'recoil';
import { Size } from '../../interfaces';
import { localStorageEffect } from '../effects/localStorageEffect';

/**
 * Represent single size choice of specific product
 */
export const stateSize = atomFamily<Size, string /* recoil family key */>({
  key: 'state-size',
  default: Size.medium,
  effects_UNSTABLE: (familyKey) => [
    localStorageEffect(`recoil-state-size~${familyKey}`),
  ],
});
