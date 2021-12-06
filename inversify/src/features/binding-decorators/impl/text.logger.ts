import "reflect-metadata";

import { ILogger, LogLevel } from "./interfaces";
import { provide } from "inversify-binding-decorators";
import { LoggerSymbols } from "./types";

@provide("TextLogger")
export class TextLogger implements ILogger {
  Log(level: LogLevel, message: string): void {
    throw new Error("Method not implemented.");
  }
}
