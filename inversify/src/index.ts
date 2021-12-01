import { Container } from "inversify";
import { FormattersBootstrapper } from "./formatters/bootstrapper";
import { GlobalSymbols, ISimpleSample } from "./interfaces";

const container = new Container({ defaultScope: "Singleton" });

FormattersBootstrapper(container);

const sample = container.get<ISimpleSample>(GlobalSymbols.SimpleSample);
sample.Run({
  target: "json",
  value: { message: "this is a simple IoC sample" },
});
