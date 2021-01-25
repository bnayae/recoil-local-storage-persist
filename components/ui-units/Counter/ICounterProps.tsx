import { RecoilState } from 'recoil';
import { IWithClassName } from '../../../interfaces';

export interface ICounterProps extends IWithClassName {
  state: RecoilState<number>;
}
