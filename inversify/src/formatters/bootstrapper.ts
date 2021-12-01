import { Container } from "inversify";

import {
  IFormatter,
  FormatterSymbols,
  IFormatterFactory,
} from "./formatter.interface";
import { JsonFormatter } from "./impl/json.formatters";
import { TextFormatter } from "./impl/text.formatters";
import { GlobalSymbols, ISimpleSample } from "../interfaces";
import { SimpleSampleFormatter } from "../sample.formatter";

export const FormattersBootstrapper = (container: Container): void => {
  container
    .bind<IFormatter<object, string>>(FormatterSymbols.Formatter)
    .to(TextFormatter)
    .whenTargetNamed("text");

  container
    .bind<IFormatter<object, string>>(FormatterSymbols.Formatter)
    .to(JsonFormatter)
    .whenTargetNamed("json");

  container
    .bind<IFormatterFactory<object, string>>(FormatterSymbols.FormatterFactory)
    .toFactory<IFormatter<object, string>, [string]>((context) => {
      return (named: string) => {
        const formatter = context.container.getNamed<
          IFormatter<object, string>
        >(FormatterSymbols.Formatter, named);

        console.log(formatter);
        return formatter;
      };
    });

  container
    .bind<ISimpleSample>(GlobalSymbols.SimpleSample)
    .to(SimpleSampleFormatter);
};
