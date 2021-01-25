import React from 'react';
import { ColorPicker, SizePicker, Counter } from '../..';
import { IWithClassName } from '../../../interfaces';
import { stateColor, stateCount, stateSize } from '../../../states';

interface IDetailsProps extends IWithClassName {
  familyKey: string;
}

export const DetailsRaw = ({ familyKey, className }: IDetailsProps) => {
  // best practice (encapsulate state within component will result with less rendering)
  const colorState = stateColor(familyKey);
  const sizeState = stateSize(familyKey);
  const countState = stateCount(familyKey);

  return (
    <div className={className}>
      <h1 className="title">Details</h1>
      <ColorPicker className="color" state={colorState} />
      <SizePicker className="size" state={sizeState} />
      <Counter className="count" state={countState} />
    </div>
  );
};
