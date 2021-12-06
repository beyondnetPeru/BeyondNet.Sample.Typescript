import { Container } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";
import { ConsoleLogger } from "./impl/console.logger";
import { ILogger } from "./impl/interfaces";
import { LoggerSymbols } from "./impl/types";
import "reflect-metadata";
import { ISimpleSample, GlobalSymbols } from "../../interfaces";
import { SampleLogger } from "../../sample.logger";

export const LoggersBootstrapper = (container: Container): void => {
  // container.bind<ILogger>(LoggerSymbols.Logger).to(ConsoleLogger);
  container.bind<ISimpleSample>(GlobalSymbols.SimpleSample).to(SampleLogger);
  container.load(buildProviderModule());
};
