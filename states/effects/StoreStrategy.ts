export enum StoreStrategy {
  /**
   * Have a store entry per atom
   */
  entryPerAtom = 'entry-per-atom',
  /**
   * Have a store entry per atom's family
   */

  entryPerFamily = 'entry-per-family',
  /**
   * Have a central store entry
   */

  centralEntry = 'central-entry',
}
