import { StoreStrategy } from './StoreStrategy';

/**
 * represent recoil family key which take the store strategy into account
 */
export interface IFamilyId {
  storeStrategy: StoreStrategy;
  key: string;
}
