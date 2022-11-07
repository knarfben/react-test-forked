import { AppRouteDefinition, AppRouteName } from "../../components/Root/Routes";
import { Maybe } from "../../types";
import UrlBuilder from "./UrlBuilder";

export interface IRouteDefinition<R extends string> {
  routeName: R;
  parameters: RouteUrlParameters;
  queryStringParameters?: object;
  bodyParameters?: object;
  headerParameters?: object;
}

// Route specifications (for a service)
export interface IRouteSpecs<R> {
  routeName: R;
  pathname: string;
  abstract?: boolean;
  noTelemetry?: boolean;
}

// Record of all routes (by service)
export type Routes<R extends string> = Record<R, IRouteSpecs<R>>;

// Reversed routes allowed to known witch route is currently used from a pathname
export interface IRouteSorted<R> {
  pathname: string;
  regexp: RegExp;
  routeName: R;
}

// Route parameters (url or querystring)
export type RouteUrlParameters = {
  [key: string]: string | number | Array<string | number>;
};

// Route info retrieved at the runtime from the current pathname
export interface IRouteInfo<R, Q> {
  routeName: Maybe<R>;
  routeParameters?: Maybe<RouteUrlParameters>;
  queryStringParameters?: Maybe<Q>;
}

/**
 * UrlBuilder aliases according to the targetted layer/service.
 */

export type UrlBuilderClient = UrlBuilder<AppRouteName, AppRouteDefinition>;
