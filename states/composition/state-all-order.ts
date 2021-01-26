import { DefaultValue, selector, waitForAll } from 'recoil';
import { stateOrder, stateTracking } from '..';
import { guardRecoilDefaultValue } from '../../guards';
import { IOrder } from '../../interfaces';

/**
 * Abstract access to structured object of a product's order.
 * Useful for load / save
 *
 * @description encapsulation of multiple disconnected state into single meaningful entity
 */
export const stateAllOrder = selector<IOrder[]>({
  key: 'state-all-order',
  get: ({ get }) => {
    const keys = get(stateTracking);

    const results: IOrder[] = get(waitForAll(keys.map((k) => stateOrder(k))));
    return results;
  },
  set: ({ get, set, reset }, orders) => {
    if (guardRecoilDefaultValue(orders)) {
      const keys = get(stateTracking);
      keys.forEach((k) => {
        const state = stateOrder(k);
        console.log(`## RESET [${state.key}]`);
        reset(state);
      });
      reset(stateTracking);
      return;
    }

    orders.forEach((order) => {
      const state = stateOrder(order.id);
      set(state, order);
    });
    set(
      stateTracking,
      orders.map((order) => order.id)
    );
  },
});
