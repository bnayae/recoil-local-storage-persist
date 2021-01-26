import { AtomEffect, DefaultValue } from 'recoil';
import { guardRecoilDefaultValue } from '../../guards';

/**
 * Save recoil state into local storage
 *
 * @param key local storage entry
 * @see https://recoiljs.org/docs/guides/atom-effects/
 */
export const localStorageGroupEffect = (entry: string) => <T>(
  key: string
): AtomEffect<T> => ({
  setSelf,
  onSet,
  // resetSelf
  // trigger,
  // node,
}): void => {
  // handle init
  const entryJson =
    typeof window !== 'undefined' ? localStorage.getItem(entry) : undefined;
  if (entryJson == null) throw Error('SSR');
  const entryObject = JSON.parse(entryJson);
  const savedValue = entryObject[key];
  setSelf(savedValue);

  onSet((newValue: T | DefaultValue /* , oldValue: T | DefaultValue */) => {
    const entryJson =
      typeof window !== 'undefined' ? localStorage.getItem(entry) : undefined;
    if (entryJson == null) throw Error('SSR');

    const entryObject = JSON.parse(entryJson);

    if (guardRecoilDefaultValue(newValue)) {
      delete entryObject[key];
    } else {
      localStorage[key] = newValue;
    }
    const json = JSON.stringify(entryObject);
    localStorage.setItem(entry, json);
  });
};
