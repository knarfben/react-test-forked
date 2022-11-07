import { StorePageHeroes, StorePageHeroDetails } from "..";

import { UrlBuilderClient } from "../../libs/UrlBuilder/types";
import UrlBuilder from "../../libs/UrlBuilder/UrlBuilder";
import { Maybe } from "../../types";
import { IStores } from "../types";
import { newLogger } from "../../libs/logger";
import { appRoutes } from "../../components/Root/Routes";

export default class StoreRoot {
  private _logger = newLogger("client");

  private _urlBuilder: UrlBuilderClient;

  private _stores: Maybe<IStores> = null;

  constructor() {
    this._urlBuilder = new UrlBuilder(appRoutes);

    this._instanciateStores();
  }

  /**
   * General initialization.
   */
  init(): Promise<false | this> {
    return Promise.resolve(this);
  }

  /**
   * Return all stores.
   */
  get stores(): IStores {
    if (!this._stores) {
      throw new Error("Stores are not defined");
    }

    return this._stores;
  }

  /**
   * Return the UrlBuilderClient instance.
   */
  get urlBuilder(): UrlBuilderClient {
    return this._urlBuilder;
  }

  /**
   * Return the logger.
   */
  get logger(): typeof this._logger {
    return this._logger;
  }

  /* Private */

  /**
   * Instanciate all stores.
   */
  private _instanciateStores() {
    this._stores = {
      /* Common stores */

      /* Page stores */

      /** Pages stores - Heroes */
      storePageHeroes: new StorePageHeroes(this, {}),
      storePageHeroDetails: new StorePageHeroDetails(this, {}),
    };
  }
}
