import { atomFamily } from 'recoil';

/**
 * Represent count of specific product's order
 */
export const stateCount = atomFamily<number, string /* recoil family key */>({
  key: 'state-count',
  default: 0,
});
