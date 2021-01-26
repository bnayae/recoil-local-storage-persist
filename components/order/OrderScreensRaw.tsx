import React, { useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { IWithClassName } from '../../interfaces';
import { stateTracking, StoreStrategy } from '../../states';
import { stateAllOrder } from '../../states/composition/state-all-order';
import { stateStoreStrategy } from '../../states/state-store-strategy';
import { Details } from './Details';

export const OrderScreensRaw = ({ className }: IWithClassName) => {
  const reset = useResetRecoilState(stateAllOrder);
  const [strategy, setStrategy] = useRecoilState(stateStoreStrategy);
  const [tracking, setTracking] = useRecoilState(stateTracking);

  useEffect(() => {
    setTracking(['A', 'B', 'C']);
  }, []);

  return (
    <div className={className}>
      <h4>Current strategy = {strategy}</h4>
      <button
        type="button"
        onClick={() => {
          setStrategy(StoreStrategy.entryPerAtom);
          reset();
          setTracking(['A', 'B', 'C']);
        }}
      >
        <h3>Reset (use store entry per atom)</h3>
      </button>
      <button
        type="button"
        onClick={() => {
          setStrategy(StoreStrategy.entryPerGroupOfAtoms);
          reset();
          setTracking(['A', 'B', 'C']);
        }}
      >
        <h3>Reset (use store entry group)</h3>
      </button>
      {tracking.map((k) => (
        <Details key={k} familyKey={k} />
      ))}
    </div>
  );
};
