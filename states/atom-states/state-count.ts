import { atomFamily } from 'recoil';
import { effectStrategy } from '../effects';

/**
 * Represent count of specific product's order
 */
export const stateCount = atomFamily<number, string /* recoil family key */>({
  key: 'state-count',
  default: 0,
  effects_UNSTABLE: (familyKey) => [effectStrategy(familyKey, 'count')],
});
