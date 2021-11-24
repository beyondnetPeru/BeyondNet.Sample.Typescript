"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var amqp_ts_1 = require("amqp-ts");
var domain_Jsondeserializer_event_1 = require("eventbus/domain-Jsondeserializer.event");
var RabbitMqEventbus = /** @class */ (function () {
    function RabbitMqEventbus(config, logger) {
        this.logger = logger;
        this.connection = new amqp_ts_1.Connection("amqp://" + config.user + ":" + config.password + "@" + config.host);
        this.exchange = this.connection.declareExchange(config.exchange, 'fanout', { durable: false });
        this.queue = this.connection.declareQueue(config.queue);
        this.subscribers = new Map();
    }
    RabbitMqEventbus.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.deserializer) {
                            throw new Error('RabbitMqEventBus has not being properly initialized, deserializer is missing');
                        }
                        return [4 /*yield*/, this.queue.bind(this.exchange)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.queue.activateConsumer(function (message) { return __awaiter(_this, void 0, void 0, function () {
                                var event, subscribers, subscribersNames, subscribersExecutions;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            event = this.deserializer.deserialize(message.content.toString());
                                            if (!event) return [3 /*break*/, 2];
                                            subscribers = this.subscribers.get(event.eventName);
                                            if (!(subscribers && subscribers.length)) return [3 /*break*/, 2];
                                            subscribersNames = subscribers.map(function (subscriber) { return subscriber.constructor.name; });
                                            this.logger.info("[RabbitMqEventBus] Message processed: " + event.eventName + " by " + subscribersNames);
                                            subscribersExecutions = subscribers.map(function (subscriber) { return subscriber.on(event); });
                                            return [4 /*yield*/, Promise.all(subscribersExecutions)];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2:
                                            message.ack();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, { noAck: false })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RabbitMqEventbus.prototype.publish = function (events) {
        return __awaiter(this, void 0, void 0, function () {
            var executions;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        executions = [];
                        // eslint-disable-next-line array-callback-return
                        events.map(function (event) {
                            var message = new amqp_ts_1.Message({
                                data: {
                                    type: event.eventName,
                                    occurred_on: event.occurredOn,
                                    id: event.eventId,
                                    attributes: event.toPrimitive(),
                                },
                                meta: {},
                            });
                            _this.logger.info("[RabbitMqEventBus] Event to be published: " + event.eventName);
                            executions.push(_this.exchange.send(message));
                        });
                        return [4 /*yield*/, Promise.all(executions)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RabbitMqEventbus.prototype.addSubscribers = function (subscribers) {
        var _this = this;
        // eslint-disable-next-line array-callback-return
        subscribers.map(function (subscriber) {
            _this.addSubscriber(subscriber);
        });
    };
    RabbitMqEventbus.prototype.setDomainEventMapping = function (domainEventMapping) {
        this.deserializer = new domain_Jsondeserializer_event_1.DomainEventJsonDeserializer(domainEventMapping);
    };
    RabbitMqEventbus.prototype.addSubscriber = function (subscriber) {
        var _this = this;
        // eslint-disable-next-line array-callback-return
        subscriber.subscribedTo().map(function (event) {
            var eventName = event.EVENT_NAME;
            if (_this.subscribers.has(eventName)) {
                _this.subscribers.get(eventName).push(subscriber);
            }
            else {
                _this.subscribers.set(eventName, [subscriber]);
            }
        });
    };
    return RabbitMqEventbus;
}());
exports.default = RabbitMqEventbus;
//# sourceMappingURL=eventbus.rabbitmq.js.map