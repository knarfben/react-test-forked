import StoreRoot from "../../../stores/StoreRoot";
import StoreBase from "../../../stores/StoreRoot/StoreBase";
import { IStoreOptions } from "../../../stores/types";
import { action, computed, makeObservable, observable } from "mobx";
import { HEROES_API } from "../../../constants";
import IHero from "../../../models/hero.model";
import { Maybe } from "../../../types";

export default class StorePageHeroes extends StoreBase {
  /**
   * Private
   */

  @observable
  private _heroes: Maybe<IHero[]> = null;

  constructor(storeRoot: StoreRoot, options: IStoreOptions) {
    super(storeRoot, options);
    makeObservable(this);
  }

  /**
   * Methods
   */
  async fetchSuperHeroes() {
    const response = await fetch(`${HEROES_API}/all.json`);

    if (response.ok) {
      const heroes: IHero[] = await response.json();

      this.setHeroes(heroes);
    }
  }

  /**
   * Actions
   */

  @action
  reset(): this {
    this._heroes = null;

    return this;
  }

  @action
  setHeroes(heroes: IHero[]): this {
    this._heroes = heroes;
    return this;
  }

  /**
   * Computed
   */

  @computed
  get heroes(): IHero[] {
    return this._heroes ?? [];
  }
}
