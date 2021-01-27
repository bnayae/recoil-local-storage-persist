import { localStorageCentralEffect } from './localStorageCentralEffect';
import { AtomEffect } from 'recoil';
import { localStoragePerAtomEffect, localStoragePerFamilyEffect } from '.';
import { StoreStrategy } from './StoreStrategy';

export const effectStrategy = <T>(
  family: string,
  key: string
): AtomEffect<T> => {
  switch (process.env.NEXT_PUBLIC_STORE_STRATEGY) {
    case StoreStrategy.entryPerAtom:
      return localStoragePerAtomEffect(family, key);
    case StoreStrategy.entryPerFamily:
      return localStoragePerFamilyEffect(family, key);
    default:
      return localStorageCentralEffect(family, key);
  }
};
