import { UrlBuilderClient } from "../../../libs/UrlBuilder/types";
import IHero from "../../../models/hero.model";
import { AppRouteName } from "../../Root/Routes";
import StorePageHeroDetails from "../PageHeroDetails/StorePageHeroDetails";

export const handleShowHeroDetailsOnClick =
  (urlBuilder: UrlBuilderClient) => (hero: IHero) => () => {
    urlBuilder.navigate(
      urlBuilder.computeRouteUrl({
        routeName: AppRouteName.HeroDetails,
        parameters: {
          id: hero.id.toString(),
        },
        queryStringParameters: {},
      })
    );
  };

export const handleHeroOnLoad = (
  storePageHeroDetails: StorePageHeroDetails
) => {
  const { urlBuilder } = storePageHeroDetails.storeRoot;

  const parameters = urlBuilder.getRouteParameters({
    routeName: AppRouteName.HeroDetails,
    parameters: {
      id: String(),
    },
    queryStringParameters: {},
  });

  if (!parameters) {
    return;
  }

  storePageHeroDetails.fetchSuperHero(parseInt(parameters.id, 10));
};
