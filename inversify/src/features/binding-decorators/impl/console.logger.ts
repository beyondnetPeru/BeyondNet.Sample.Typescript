import "reflect-metadata";

import { ILogger, LogLevel } from "./interfaces";
import { provide } from "inversify-binding-decorators";
import { LoggerSymbols } from "./types";

@provide("ConsoleLogger")
export class ConsoleLogger implements ILogger {
  Log(level: LogLevel, message: string): void {
    console.log(`${Date.now.toString()} - ${level}: ${message}`);
  }
}
