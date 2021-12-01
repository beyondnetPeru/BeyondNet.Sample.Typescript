import { Container } from "inversify";
import { IFormatter, Types } from "./formatters/interfaces";
import { JsonFormatter } from "./formatters/json.formatters";
import { SampleFormatter } from "./formatters/sample.formatters";
import { GlobalTypes, ISample } from "./interfaces";

export const Bootstrapper = (container: Container): void => {
  container.bind<IFormatter<object, string>>(Types.Formatter).to(JsonFormatter);
  container.bind<ISample>(GlobalTypes.Sample).to(SampleFormatter);
};
