"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandNotFoundException = void 0;
var CommandNotFoundException = /** @class */ (function (_super) {
    __extends(CommandNotFoundException, _super);
    function CommandNotFoundException(command) {
        return _super.call(this, "The command <" + command.constructor.name + "> hasn't a command handler associated") || this;
    }
    return CommandNotFoundException;
}(Error));
exports.CommandNotFoundException = CommandNotFoundException;
//# sourceMappingURL=command-notfound.exception.js.map