import { Size } from './Size';

export interface IOrder {
  id: string;
  color: string;
  size: Size;
  count: number;
}
