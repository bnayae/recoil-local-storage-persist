import { RecoilState } from 'recoil';
import { IWithClassName } from '../../../interfaces';

export interface IColorPickerProps extends IWithClassName {
  state: RecoilState<string>;
}
