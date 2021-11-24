"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var format_executor_1 = require("./formatting/format.executor");
var json_formatter_impl_1 = require("./formatting/impl/json-formatter.impl");
var executor = new format_executor_1.FormatExecutor(new json_formatter_impl_1.JsonFormatter());
executor.PrintObject({ name: "beyondnet" });
//# sourceMappingURL=index.js.map