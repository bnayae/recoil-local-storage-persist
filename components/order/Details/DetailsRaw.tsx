import React from 'react';
import { useSetRecoilState } from 'recoil';
import { ColorPicker, SizePicker, Counter } from '../..';
import { IWithClassName, Size } from '../../../interfaces';
import { stateColor, stateCount, stateSize } from '../../../states';

interface IDetailsProps extends IWithClassName {
  familyKey: string;
}

export const DetailsRaw = ({ familyKey, className }: IDetailsProps) => {
  // best practice (encapsulate state within component will result with less rendering)
  const colorState = stateColor(familyKey);
  const sizeState = stateSize(familyKey);
  const countState = stateCount(familyKey);
  const setSize = useSetRecoilState(sizeState);
  const setCount = useSetRecoilState(countState);

  return (
    <div className={className}>
      <h1 className="title">Details</h1>
      <ColorPicker className="color" state={colorState} />
      <SizePicker className="size" state={sizeState} />
      <Counter className="count" state={countState} />
      <button
        className="btn2"
        type="button"
        onClick={() => {
          setSize((p) => (p === Size.large ? Size.small : Size.large));
          setCount((p) => p + 5);
        }}
        value=""
      >
        Change multi state
      </button>
    </div>
  );
};
