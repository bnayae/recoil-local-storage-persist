import { atom } from 'recoil';
import { StoreStrategy } from '.';

export const stateStoreStrategy = atom<StoreStrategy>({
  key: 'state-store-strategy',
  default: StoreStrategy.entryPerAtom,
});
