import React from 'react';
import { useRecoilState } from 'recoil';
import { ICounterProps } from './ICounterProps';

export const CounterRaw = ({ className, state }: ICounterProps) => {
  const [value, setValue] = useRecoilState(state);

  return (
    <input
      type="number"
      value={value}
      onChange={(e) => setValue(e.target.valueAsNumber)}
      className={className}
    />
  );
};
