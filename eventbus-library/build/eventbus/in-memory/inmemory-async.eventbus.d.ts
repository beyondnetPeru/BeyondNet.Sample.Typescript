import { DomainEventMapping } from 'eventbus/domain-mapping.event';
import { IDomainEvent, IDomainEventSubscriber, IEventBus } from 'eventbus/interfaces';
export declare class InMemoryAsyncEventBus implements IEventBus {
    private bus;
    constructor(subscribers: Array<IDomainEventSubscriber<IDomainEvent>>);
    start(): Promise<void>;
    publish(events: IDomainEvent[]): Promise<void>;
    addSubscribers(subscribers: Array<IDomainEventSubscriber<IDomainEvent>>): void;
    setDomainEventMapping(domainEventMapping: DomainEventMapping): void;
}
