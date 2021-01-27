import React from 'react';
import { useRecoilState } from 'recoil';
import { ICounterProps } from './ICounterProps';

export const CounterRaw = ({ className, state }: ICounterProps) => {
  const [value, setValue] = useRecoilState(state);

  return (
    <div className={className}>
      <h3 className="counter-title">Counter:</h3>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.valueAsNumber)}
        className="counter"
      />
      <button
        className="btn1"
        type="button"
        onClick={() => {
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < 10; i++) {
            setValue((prv) => prv + 1);
          }
        }}
      >
        Count Fast (with Prev)
      </button>
      <button
        className="btn2"
        type="button"
        onClick={() => {
          const count = value + 1;
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < 10; i++) {
            setValue(count + i);
          }
        }}
        value=""
      >
        Count Fast (without Prev)
      </button>
    </div>
  );
};
