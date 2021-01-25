import { selectorFamily, waitForAll } from 'recoil';
import { stateColor, stateCount, stateSize, stateTracking } from '..';
import { guardRecoilDefaultValue } from '../../guards';
import { IOrder } from '../../interfaces';

/**
 * Abstract access to structured object of a product's order.
 * Useful for load / save
 *
 * @description encapsulation of multiple disconnected state into single meaningful entity
 */
export const stateOrder = selectorFamily<
  IOrder,
  string /* recoil family key */
>({
  key: 'state-order',
  get: (familyKey) => ({ get }) => {
    const { color, size, count } = get(
      waitForAll({
        color: stateColor(familyKey),
        size: stateSize(familyKey),
        count: stateCount(familyKey),
      })
    );
    const product: IOrder = {
      id: familyKey,
      count,
      size,
      color,
    };
    return product;
  },
  set: (familyKey) => ({ set, reset }, value) => {
    // reset (when recoil's value is empty)
    if (guardRecoilDefaultValue(value)) {
      reset(stateColor(familyKey));
      reset(stateSize(familyKey));
      reset(stateCount(familyKey));

      // remove from tracking
      set(stateTracking, (prv) => [...prv.filter((m) => m !== familyKey)]);

      return;
    }
    // set
    set(stateColor(familyKey), value.color);
    set(stateSize(familyKey), value.size);
    set(stateCount(familyKey), value.count);

    // track
    set(stateTracking, (prv) => {
      // already exists
      if (prv.includes(familyKey)) return prv;
      // add tracking
      return [...prv, familyKey];
    });
  },
});
