import StoreRoot from '.'
import { IStoreOptions, IStoreBase } from '../types'

/**
 * Base store for all stores.
 */
export default class StoreBase<O extends IStoreOptions = {}>
  implements IStoreBase
{
  public storeRoot: StoreRoot

  public options: O

  constructor(storeRoot: StoreRoot, options: O) {
    this.storeRoot = storeRoot

    this.options = {
      ...options
    }
  }

  /**
   * Set some options to the store.
   */
  setOptions(options: Partial<O>): this {
    this.options = {
      ...this.options,
      ...(options as O)
    }

    return this
  }
}
