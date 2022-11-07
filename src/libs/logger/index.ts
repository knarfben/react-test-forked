import { setupLogger } from "../../libs/logger/setupLogger";

export type Logger = ReturnType<typeof newLogger>;

export type NamespaceLogger = ReturnType<Logger>;

export const loggerMapping = {
  client: {
    // layers
    react: "react",
    stores: "stores",
    queries: "queries",

    // domains
    internal: "internal",
    authentication: "authentication",
  },

  common: {
    stubs: "stubs",
  },

  server: {
    init: "init",
    config: "config",
  },
};

const { newLogger, debug } = setupLogger(loggerMapping);

export { newLogger, debug };
