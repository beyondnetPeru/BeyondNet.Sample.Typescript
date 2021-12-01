import { inject, injectable } from "inversify";
import { IFormatter, Types } from "./interfaces";
import { ISample } from "../interfaces";
import "reflect-metadata";

@injectable()
export class SampleFormatter implements ISample {
  private readonly _formatter: IFormatter<object, string>;

  constructor(@inject(Types.Formatter) formatter: IFormatter<object, string>) {
    this._formatter = formatter;
  }

  Run(value: Object): void {
    console.log(this._formatter.Format(value));
  }
}
