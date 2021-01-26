import { AtomEffect, DefaultValue } from 'recoil';
import { guardRecoilDefaultValue } from '../../guards';

/**
 * Save recoil state into local storage
 *
 * @param entry local storage entry
 * @see https://recoiljs.org/docs/guides/atom-effects/
 */
export const localStorageEffect = (entry: string): AtomEffect<string> => ({
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
    console.log(`### ${trigger}`, {
      key: node.key,
      savedValue,
    });

    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue: string | DefaultValue, oldValue: string | DefaultValue) => {
    console.log(`### ${trigger}`, {
      key: node.key,
      newValue,
      oldValue,
    });
    if (guardRecoilDefaultValue(newValue)) {
      localStorage.removeItem(entry);
    } else {
      localStorage.setItem(entry, JSON.stringify(newValue));
    }
  });
};
