export enum LogLevel {
  Info,
  Verbose,
  Warning,
  Error,
  Critical,
}

export interface ILogger {
  Log(level: LogLevel, message: string): void;
}
