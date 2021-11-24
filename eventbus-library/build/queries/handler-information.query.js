"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryHandlersInformation = void 0;
var query_notfound_exception_1 = require("../exceptions/query-notfound.exception");
var QueryHandlersInformation = /** @class */ (function () {
    function QueryHandlersInformation(queryHandlers) {
        this.queryHandlersMap = this.formatHandlers(queryHandlers);
    }
    QueryHandlersInformation.prototype.formatHandlers = function (queryHandlers) {
        var handlersMap = new Map();
        queryHandlers.forEach(function (queryHandler) {
            handlersMap.set(queryHandler.subscribedTo(), queryHandler);
        });
        return handlersMap;
    };
    QueryHandlersInformation.prototype.search = function (query) {
        var queryHandler = this.queryHandlersMap.get(query.constructor);
        if (!queryHandler) {
            throw new query_notfound_exception_1.QueryNotFoundException(query);
        }
        return queryHandler;
    };
    return QueryHandlersInformation;
}());
exports.QueryHandlersInformation = QueryHandlersInformation;
//# sourceMappingURL=handler-information.query.js.map