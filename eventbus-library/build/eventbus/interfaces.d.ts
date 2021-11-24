import { DomainEventMapping } from './domain-mapping.event';
export interface IDomainEvent {
    EVENT_NAME: string;
    readonly aggregateId: string;
    readonly eventId: string;
    readonly occurredOn: Date;
    readonly eventName: string;
    fromPrimitives: (...args: any[]) => any;
    toPrimitive(): Object;
}
export declare type DomainEventClass = {
    EVENT_NAME: string;
    fromPrimitives(...args: any[]): IDomainEvent;
};
export interface IDomainEventSubscriber<T extends IDomainEvent> {
    subscribedTo(): Array<DomainEventClass>;
    on(domainEvent: T): Promise<void>;
}
export interface IEventBus {
    setDomainEventMapping(domainEventMapping: DomainEventMapping): void;
    publish(events: Array<IDomainEvent>): Promise<void>;
    addSubscribers(subscribers: Array<IDomainEventSubscriber<IDomainEvent>>): void;
    start(): Promise<void>;
}
export default interface ILogger {
    debug(message: string): void;
    error(message: string | Error): void;
    info(message: string): void;
}
