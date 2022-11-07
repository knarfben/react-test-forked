import { Maybe } from "../types";
import * as stores from ".";

export interface IStores {
  /* Common stores */

  /* Page stores */

  storePageHeroes: stores.StorePageHeroes;

  storePageHeroDetails: stores.StorePageHeroDetails;
}

/**
 * Implemented by all stores, allowing to have a common base interface.
 */
export interface IStoreBase {}

/**
 * Describe the options that can be passed to each stores.
 */
export interface IStoreOptions {}

/**
 * Interface use for Stores that need to be "rehydrated" from (react-)query data.
 */
export type StoreRehydrateFn<TReturnData> = () => TReturnData;

export interface IStoreRehydrated<TReturnData> {
  updatedAt: Maybe<string>;
  rehydrate(fn: StoreRehydrateFn<Maybe<TReturnData>>): this;
}

export interface IStoreListMeta<T> {
  key: string;
  value: T;
}
