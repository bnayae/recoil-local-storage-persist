import { AtomEffect, DefaultValue } from 'recoil';
import { guardRecoilDefaultValue } from '../../guards';

/**
 * Save recoil state into local storage
 *
 * @param key local storage entry
 * @see https://recoiljs.org/docs/guides/atom-effects/
 */
export const localStoragePerFamilyEffect = <T>(
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
  const entryKey = `${entry}~${family}`;

  // handle init
  const entryJson =
    typeof window !== 'undefined' ? localStorage.getItem(entryKey) : undefined;
  if (entryJson != null) {
    const entryObject = JSON.parse(entryJson);
    const savedValue = entryObject[key];
    if (savedValue) setSelf(savedValue);
  }

  onSet((newValue: T | DefaultValue /* , oldValue: T | DefaultValue */) => {
    const entryJson =
      typeof window !== 'undefined'
        ? localStorage.getItem(entryKey)
        : undefined;

    const entryObject = entryJson == null ? {} : JSON.parse(entryJson);

    if (guardRecoilDefaultValue(newValue)) {
      delete entryObject[key];
    } else {
      entryObject[key] = newValue;
    }
    console.log('# storing ...');
    if (Object.keys(entryObject).length) {
      const json = JSON.stringify(entryObject);
      localStorage.setItem(entryKey, json);
    } else {
      localStorage.removeItem(entryKey);
    }
  });
};
