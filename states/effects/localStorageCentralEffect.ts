import { AtomEffect, DefaultValue } from 'recoil';
import { guardRecoilDefaultValue } from '../../guards';

/**
 * Save recoil state into local storage
 *
 * @param key local storage entry
 * @see https://recoiljs.org/docs/guides/atom-effects/
 */
export const localStorageCentralEffect = <T>(
  family: string,
  key: string,
  entry = 'recoil-state'
): AtomEffect<T> => ({
  setSelf,
  onSet,
  // resetSelf
  // trigger,
  // node,
}): void => {
  const objKey = `${family}~${key}`;

  // handle init
  const entryJson =
    typeof window !== 'undefined' ? localStorage.getItem(entry) : undefined;
  if (entryJson != null) {
    const entryObject = JSON.parse(entryJson);
    const savedValue = entryObject[objKey];
    if (savedValue) setSelf(savedValue);
  }

  onSet((newValue: T | DefaultValue /* , oldValue: T | DefaultValue */) => {
    const entryJson =
      typeof window !== 'undefined' ? localStorage.getItem(entry) : undefined;

    const entryObject = entryJson == null ? {} : JSON.parse(entryJson);

    if (guardRecoilDefaultValue(newValue)) {
      delete entryObject[objKey];
    } else {
      entryObject[objKey] = newValue;
    }
    console.log('# storing ...');
    const json = JSON.stringify(entryObject);
    localStorage.setItem(entry, json);
  });
};
