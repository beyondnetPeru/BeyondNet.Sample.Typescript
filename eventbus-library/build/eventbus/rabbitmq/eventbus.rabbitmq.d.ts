import { DomainEventMapping } from 'eventbus/domain-mapping.event';
import ILogger, { IDomainEvent, IDomainEventSubscriber, IEventBus } from 'eventbus/interfaces';
import RabbitMqConfig from './config.rabbitmq';
export default class RabbitMqEventbus implements IEventBus {
    private connection;
    private exchange;
    private queue;
    private logger;
    private deserializer?;
    private subscribers;
    constructor(config: RabbitMqConfig, logger: ILogger);
    start(): Promise<void>;
    publish(events: Array<IDomainEvent>): Promise<void>;
    addSubscribers(subscribers: Array<IDomainEventSubscriber<IDomainEvent>>): void;
    setDomainEventMapping(domainEventMapping: DomainEventMapping): void;
    private addSubscriber;
}
