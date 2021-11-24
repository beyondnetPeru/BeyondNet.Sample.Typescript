/// <reference types="node" />
import { IDomainEvent, IDomainEventSubscriber } from '../eventbus/interfaces';
import { EventEmitter } from 'events';
export declare class EventEmitterBus extends EventEmitter {
    constructor(subscribers: Array<IDomainEventSubscriber<IDomainEvent>>);
    registerSubscribers(subscribers?: IDomainEventSubscriber<IDomainEvent>[]): void;
    private registerSubscriber;
    publish(events: IDomainEvent[]): void;
}
