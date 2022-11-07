import StoreRoot from "../../../stores/StoreRoot";
import StoreBase from "../../../stores/StoreRoot/StoreBase";
import { IStoreOptions } from "../../../stores/types";
import { action, computed, makeObservable, observable } from "mobx";
import IHero from "../../../models/hero.model";
import { Maybe } from "../../../types";
import { HEROES_API } from "../../../constants";

export default class StorePageHeroDetails extends StoreBase {
  /**
   * Private
   */

  @observable
  private _hero: Maybe<IHero> = null;

  constructor(storeRoot: StoreRoot, options: IStoreOptions) {
    super(storeRoot, options);
    makeObservable(this);
  }

  /**
   * Methods
   */
  async fetchSuperHero(id: number) {
    const response = await fetch(`${HEROES_API}/id/${id}.json`);

    if (response.ok) {
      const heroe: IHero = await response.json();

      this.setHero(heroe);
    }
  }

  /**
   * Actions
   */

  @action
  reset(): this {
    this._hero = null;

    return this;
  }

  @action
  setHero(hero: IHero): this {
    this._hero = hero;
    return this;
  }

  /**
   * Computed
   */

  @computed
  get hero(): Maybe<IHero> {
    return this._hero;
  }

  @computed
  get heroCharts(): Array<{ x: number; y: number }> {
    if (!this.hero) {
      return [];
    }

    return [
      { x: this.hero.powerstats.combat, y: this.hero.powerstats.combat },
      {
        x: this.hero.powerstats.durability,
        y: this.hero.powerstats.durability,
      },
      {
        x: this.hero.powerstats.intelligence,
        y: this.hero.powerstats.intelligence,
      },
      { x: this.hero.powerstats.power, y: this.hero.powerstats.power },
      { x: this.hero.powerstats.speed, y: this.hero.powerstats.speed },
      { x: this.hero.powerstats.strength, y: this.hero.powerstats.strength },
    ];
  }
}
