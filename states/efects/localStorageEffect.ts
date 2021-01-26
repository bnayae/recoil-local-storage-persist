import { AtomEffect, DefaultValue } from 'recoil';
import { guardRecoilDefaultValue } from '../../guards';

/**
 * Save recoil state into local storage
 *
 * @param entry local storage entry
 * @see https://recoiljs.org/docs/guides/atom-effects/
 */
export const localStorageEffect = <T>(entry: string): AtomEffect<T> => ({
  setSelf,
  onSet,
  // resetSelf
  trigger,
  node,
}): void => {
  // handle init
  const savedValue =
    typeof window !== 'undefined' ? localStorage.getItem(entry) : undefined;
  if (savedValue != null) {
    if (trigger === 'set') {
      // eslint-disable-next-line no-console
      console.warn(
        `Local Storage [${entry}]: unexpected override of recoil state`,
        node.key
      );
    }

    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue: T | DefaultValue /* , oldValue: T | DefaultValue */) => {
    if (guardRecoilDefaultValue(newValue)) {
      localStorage.removeItem(entry);
    } else {
      localStorage.setItem(entry, JSON.stringify(newValue));
    }
  });
};
