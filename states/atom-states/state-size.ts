import { atomFamily } from 'recoil';
import { Size } from '../../interfaces';

/**
 * Represent single size choice of specific product
 */
export const stateSize = atomFamily<Size, string /* recoil family key */>({
  key: 'state-size',
  default: Size.medium,
});
