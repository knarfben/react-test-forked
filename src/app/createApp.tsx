import Root from "../components/Root";
import StoreRoot from "../stores/StoreRoot";

interface IApp {
  rootComponent: React.ReactChild | Iterable<React.ReactNode>;
  storeRoot: StoreRoot;
}

/**
 * Init environment and root store before rendering the Root node.
 */
export function createApp(): Promise<IApp> {
  return (
    Promise.resolve()

      /**
       * Instanciate Root store and initialize the application.
       */
      .then(() => {
        return new StoreRoot().init().then((storeRoot) => {
          if (!storeRoot) {
            throw new Error("Cant create app");
          }

          return storeRoot;
        });
      })

      /**
       * Return the Root component and the root store.
       */
      .then((storeRoot) => {
        return {
          rootComponent: <Root storeRoot={storeRoot} />,
          storeRoot,
        };
      })
  );
}
