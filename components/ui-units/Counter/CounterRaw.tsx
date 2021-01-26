import React from 'react';
import { useRecoilState } from 'recoil';
import { ICounterProps } from './ICounterProps';

export const CounterRaw = ({ className, state }: ICounterProps) => {
  const [value, setValue] = useRecoilState(state);

  return (
    <div className={className}>
      <h3 className="counter-title">Select color:</h3>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.valueAsNumber)}
        className="counter"
      />
    </div>
  );
};
