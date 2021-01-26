import React, { useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { IWithClassName } from '../../interfaces';
import { stateTracking } from '../../states';
import { stateAllOrder } from '../../states/composition/state-all-order';
import { Details } from './Details';

export const OrderScreensRaw = ({ className }: IWithClassName) => {
  const reset = useResetRecoilState(stateAllOrder);
  const [tracking, setTracking] = useRecoilState(stateTracking);

  useEffect(() => {
    setTracking(['A', 'B', 'C']);
  }, []);

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => {
          reset();
          setTracking(['A', 'B', 'C']);
        }}
      >
        <h3>Reset</h3>
      </button>
      {tracking.map((k) => (
        <Details key={k} familyKey={k} />
      ))}
    </div>
  );
};
