import { FormatExecutor } from "./formatting/format.executor";
import { JsonFormatter } from "./formatting/impl/json-formatter.impl";

const executor = new FormatExecutor(new JsonFormatter());
executor.PrintObject({ name: "beyondnet" });
