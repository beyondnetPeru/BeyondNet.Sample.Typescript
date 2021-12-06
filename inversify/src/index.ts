import { Container } from "inversify";
import { LoggersBootstrapper } from "./features/binding-decorators/bootstrapper";
import { FormattersBootstrapper } from "./formatters/bootstrapper";
import { GlobalSymbols, ISimpleSample } from "./interfaces";
import { logger } from "./utils/log.logger";

const container = new Container({ defaultScope: "Singleton" });

container.applyMiddleware(logger);

FormattersBootstrapper(container);
LoggersBootstrapper(container);

const sample = container.get<ISimpleSample>(GlobalSymbols.SimpleSample);
sample.Run({
  target: "json",
  value: { message: "this is a simple IoC sample" },
});
