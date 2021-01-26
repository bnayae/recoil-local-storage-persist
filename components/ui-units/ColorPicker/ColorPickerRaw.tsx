import React from 'react';
import { SketchPicker } from 'react-color';
import Block from 'react-color/lib/components/block/Block';
import { useRecoilState } from 'recoil';
import { IColorPickerProps } from './IColorPickerProps';

export const ColorPickerRaw = ({ className, state }: IColorPickerProps) => {
  const [value, setValue] = useRecoilState(state);

  return (
    <div className={className}>
      <h3 className="color-title">Select color:</h3>
      <input
        className="picker"
        type="color"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <Block
        className="picker"
        color={value}
        triangle="hide"
        onChangeComplete={(color: { hex: string }) => setValue(color.hex)}
      /> */}
    </div>
  );
};
