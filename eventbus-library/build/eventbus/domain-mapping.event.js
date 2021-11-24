"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEventMapping = void 0;
var DomainEventMapping = /** @class */ (function () {
    function DomainEventMapping(mapping) {
        this.mapping = mapping.reduce(this.eventsExtractor(), new Map());
    }
    DomainEventMapping.prototype.eventsExtractor = function () {
        var _this = this;
        return function (map, subscriber) {
            subscriber.subscribedTo().forEach(_this.eventNameExtractor(map));
            return map;
        };
    };
    DomainEventMapping.prototype.eventNameExtractor = function (map) {
        return function (domainEvent) {
            var eventName = domainEvent.EVENT_NAME;
            map.set(eventName, domainEvent);
        };
    };
    DomainEventMapping.prototype.for = function (name) {
        var domainEvent = this.mapping.get(name);
        if (!domainEvent) {
            return;
        }
        return domainEvent;
    };
    return DomainEventMapping;
}());
exports.DomainEventMapping = DomainEventMapping;
//# sourceMappingURL=domain-mapping.event.js.map