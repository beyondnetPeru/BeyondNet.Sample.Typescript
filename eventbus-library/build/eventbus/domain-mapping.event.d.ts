import { DomainEventClass, IDomainEvent, IDomainEventSubscriber } from './interfaces';
export declare class DomainEventMapping {
    private mapping;
    constructor(mapping: IDomainEventSubscriber<IDomainEvent>[]);
    private eventsExtractor;
    private eventNameExtractor;
    for(name: string): DomainEventClass | undefined;
}
