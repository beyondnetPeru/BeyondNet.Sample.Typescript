import { inject, injectable } from "inversify";
import "reflect-metadata";

import { FormatterSymbols, IFormatter } from "./formatters/formatter.interface";
import { ISimpleSample, Props } from "./interfaces";

@injectable()
export class SimpleSampleFormatter implements ISimpleSample {
  private readonly _formatterFactory: (
    target: string
  ) => IFormatter<object, string>;

  constructor(
    @inject(FormatterSymbols.FormatterFactory)
    formatterFactory: () => IFormatter<object, string>
  ) {
    this._formatterFactory = formatterFactory;
  }

  Run(props: Props): void {
    console.log(
      `Factory with Params: ${this._formatterFactory(
        props.target ?? "json"
      ).Format(props.value)}`
    );
  }
}
