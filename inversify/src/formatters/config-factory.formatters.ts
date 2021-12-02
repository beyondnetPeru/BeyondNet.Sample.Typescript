import { interfaces } from "inversify";
import { FormatterSymbols, IFormatter } from "./formatter.interface";

export const ConfigurationSourceFactory = (
  context: interfaces.Context,
  named: string
) => {
  const formatter = context.container.getNamed<IFormatter<object, string>>(
    FormatterSymbols.Formatter,
    named
  );

  console.log(formatter);
  return formatter;
};
