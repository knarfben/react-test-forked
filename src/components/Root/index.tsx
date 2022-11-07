import { HashRouter } from "react-router-dom";
import StoreRoot from "../../stores/StoreRoot";
import { StyleSheetManager } from "styled-components";
import { ContextStores } from "../../hooks/useStores";
import App from "./App";

export interface IRootProps {
  storeRoot: StoreRoot;
}

export default function Root(props: IRootProps) {
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ContextStores.Provider value={{ storeRoot: props.storeRoot }}>
      <HashRouter>
        <StyleSheetManager>
          <App />
        </StyleSheetManager>
      </HashRouter>
    </ContextStores.Provider>
  );
}
