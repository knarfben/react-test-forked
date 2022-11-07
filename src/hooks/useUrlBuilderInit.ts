import { createHashHistory, To } from "history";
import { NavigateOptions, useLocation, useNavigate } from "react-router-dom";
import { useUrlBuilder } from "./useUrlBuilder";

/**
 * Set some helpers in the UrlBuilder instance.
 */
export function useUrlBuilderInit(): void {
  const { urlBuilder } = useUrlBuilder();

  const navigate = useNavigate();
  const location = useLocation();

  const history = createHashHistory();

  /**
   * Custom navigation function that wraps the react-router navigate function,
   * allowing to trigger navigation prompts registered in StoreLayout.
   * Used to warn about losing changes for example.
   */
  const navigateFn = (to: To | number, options?: NavigateOptions) => {
    if (typeof to === "number") {
      return navigate(to);
    }

    return navigate(to, options);
  };

  urlBuilder
    .setNavigateFunction(navigateFn)
    .setHistory(history)
    .setLocation(location);
}
