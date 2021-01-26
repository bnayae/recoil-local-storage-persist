export enum StoreStrategy {
  /**
   * Have a stor entry per atom
   */
  entryPerAtom = 'entry-per-atom',
  /**
   * Have stor entry which hold data of multiple atoms
   */

  entryPerGroupOfAtoms = 'entry-per-group-of-atoms',
}
