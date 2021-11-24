import { DomainEventMapping } from 'eventbus/domain-mapping.event';
import { IDomainEvent, IDomainEventSubscriber, IEventBus } from 'eventbus/interfaces';
export declare class InMemorySyncEventBus implements IEventBus {
    private subscriptions;
    constructor();
    start(): Promise<void>;
    publish(events: Array<IDomainEvent>): Promise<void>;
    addSubscribers(subscribers: Array<IDomainEventSubscriber<IDomainEvent>>): void;
    setDomainEventMapping(domainEventMapping: DomainEventMapping): void;
    private subscribe;
}
