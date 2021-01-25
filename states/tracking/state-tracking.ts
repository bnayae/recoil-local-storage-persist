import { atom } from 'recoil';

/**
 * Trace all active ids
 */
export const stateTracking = atom<string[] /* ids */>({
  key: 'state-order-tracking',
  default: [],
});
