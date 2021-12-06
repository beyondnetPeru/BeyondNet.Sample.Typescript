import { inject, injectable } from "inversify";
import "reflect-metadata";

import {
  ILogger,
  LogLevel,
} from "./features/binding-decorators/impl/interfaces";
import { LoggerSymbols } from "./features/binding-decorators/impl/types";
import { ISimpleSample, Props } from "./interfaces";

@injectable()
export class SampleLogger implements ISimpleSample {
  private readonly _logger: ILogger;

  constructor(@inject("ConsoleLogger") logger: ILogger) {
    this._logger = logger;
  }

  Run(props: Props): void {
    this._logger.Log(LogLevel.Info, `Starting app with values: ${props}`);
  }
}
