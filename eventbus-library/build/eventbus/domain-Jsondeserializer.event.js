"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEventJsonDeserializer = void 0;
var DomainEventJsonDeserializer = /** @class */ (function () {
    function DomainEventJsonDeserializer(mapping) {
        this.mapping = mapping;
    }
    DomainEventJsonDeserializer.prototype.deserialize = function (event) {
        var eventData = JSON.parse(event).data;
        var eventName = eventData.type;
        var eventClass = this.mapping.for(eventName);
        if (!eventClass) {
            return;
        }
        return eventClass.fromPrimitives(eventData.attributes.id, eventData.attributes, eventData.id, eventData.occurred_on);
    };
    return DomainEventJsonDeserializer;
}());
exports.DomainEventJsonDeserializer = DomainEventJsonDeserializer;
//# sourceMappingURL=domain-Jsondeserializer.event.js.map