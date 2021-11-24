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
exports.EventEmitterBus = void 0;
var events_1 = require("events");
var EventEmitterBus = /** @class */ (function (_super) {
    __extends(EventEmitterBus, _super);
    function EventEmitterBus(subscribers) {
        var _this = _super.call(this) || this;
        _this.registerSubscribers(subscribers);
        return _this;
    }
    EventEmitterBus.prototype.registerSubscribers = function (subscribers) {
        var _this = this;
        // eslint-disable-next-line array-callback-return
        subscribers === null || subscribers === void 0 ? void 0 : subscribers.map(function (subscriber) {
            _this.registerSubscriber(subscriber);
        });
    };
    EventEmitterBus.prototype.registerSubscriber = function (subscriber) {
        var _this = this;
        // eslint-disable-next-line array-callback-return
        subscriber.subscribedTo().map(function (event) {
            _this.on(event.EVENT_NAME, subscriber.on.bind(subscriber));
        });
    };
    EventEmitterBus.prototype.publish = function (events) {
        var _this = this;
        events.map(function (event) { return _this.emit(event.eventName, event); });
    };
    return EventEmitterBus;
}(events_1.EventEmitter));
exports.EventEmitterBus = EventEmitterBus;
//# sourceMappingURL=event-emitter.eventbus.js.map