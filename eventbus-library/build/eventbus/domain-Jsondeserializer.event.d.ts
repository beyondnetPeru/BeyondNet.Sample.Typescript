import { DomainEventMapping } from './domain-mapping.event';
export declare class DomainEventJsonDeserializer {
    private mapping;
    constructor(mapping: DomainEventMapping);
    deserialize(event: string): import("./interfaces").IDomainEvent | undefined;
}
