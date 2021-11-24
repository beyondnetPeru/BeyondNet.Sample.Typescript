"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandHandlersInformation = void 0;
var command_notfound_exception_1 = require("../exceptions/command-notfound.exception");
var CommandHandlersInformation = /** @class */ (function () {
    function CommandHandlersInformation(commandHandlers) {
        this.commandHandlersMap = this.formatHandlers(commandHandlers);
    }
    CommandHandlersInformation.prototype.formatHandlers = function (commandHandlers) {
        var handlersMap = new Map();
        commandHandlers.forEach(function (commandHandler) {
            handlersMap.set(commandHandler.subscribedTo(), commandHandler);
        });
        return handlersMap;
    };
    CommandHandlersInformation.prototype.search = function (command) {
        var commandHandler = this.commandHandlersMap.get(command.constructor);
        if (!commandHandler) {
            throw new command_notfound_exception_1.CommandNotFoundException(command);
        }
        return commandHandler;
    };
    return CommandHandlersInformation;
}());
exports.CommandHandlersInformation = CommandHandlersInformation;
//# sourceMappingURL=handler-information.command.js.map