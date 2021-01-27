import { AtomEffect, DefaultValue } from 'recoil';
import { guardRecoilDefaultValue } from '../../guards';

/**
 * Save recoil state into local storage
 *
 * @param entry local storage entry
 * @see https://recoiljs.org/docs/guides/atom-effects/
 */
export const localStoragePerAtomEffect = <T>(
  family: string,
  key: string
): AtomEffect<T> => ({
  setSelf,
  onSet,
  // resetSelf
  // trigger,
  // node,
}): void => {
  const storeKey = `recoil-state~${family}~${key}`;

  // handle init
  const savedValue =
    typeof window !== 'undefined' ? localStorage.getItem(storeKey) : undefined;
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue: T | DefaultValue /* , oldValue: T | DefaultValue */) => {
    console.log('# storing ...');
    if (guardRecoilDefaultValue(newValue)) {
      localStorage.removeItem(storeKey);
    } else {
      localStorage.setItem(storeKey, JSON.stringify(newValue));
    }
  });
};
