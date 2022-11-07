import { useUrlBuilderInit } from "../../hooks/useUrlBuilderInit";
import GlobalStyle from "../../styles/themes/white/globalStyles";

import AppRoutes from "./AppRoutes";

export default function App() {
  useUrlBuilderInit();

  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}
