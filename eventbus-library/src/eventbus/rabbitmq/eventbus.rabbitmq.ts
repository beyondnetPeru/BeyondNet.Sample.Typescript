import { Connection, Exchange, Message, Queue } from 'amqp-ts';
import { DomainEventJsonDeserializer } from 'eventbus/domain-Jsondeserializer.event';
import { DomainEventMapping } from 'eventbus/domain-mapping.event';
import ILogger, { IDomainEvent, IDomainEventSubscriber, IEventBus } from 'eventbus/interfaces';
import RabbitMqConfig from './config.rabbitmq';

export default class RabbitMqEventbus implements IEventBus {
  private connection: Connection;
  private exchange: Exchange;
  private queue: Queue;
  private logger: ILogger;
  private deserializer?: DomainEventJsonDeserializer;
  private subscribers: Map<string, Array<IDomainEventSubscriber<IDomainEvent>>>;

  constructor(config: RabbitMqConfig, logger: ILogger) {
    this.logger = logger;
    this.connection = new Connection(`amqp://${config.user}:${config.password}@${config.host}`);
    this.exchange = this.connection.declareExchange(config.exchange, 'fanout', { durable: false });
    this.queue = this.connection.declareQueue(config.queue);
    this.subscribers = new Map();
  }

  async start(): Promise<void> {
    if (!this.deserializer) {
      throw new Error('RabbitMqEventBus has not being properly initialized, deserializer is missing');
    }

    await this.queue.bind(this.exchange);
    await this.queue.activateConsumer(
      async (message) => {
        const event = this.deserializer!.deserialize(message.content.toString());
        if (event) {
          const subscribers = this.subscribers.get(event.eventName);
          if (subscribers && subscribers.length) {
            const subscribersNames = subscribers.map((subscriber) => subscriber.constructor.name);
            this.logger.info(`[RabbitMqEventBus] Message processed: ${event.eventName} by ${subscribersNames}`);
            const subscribersExecutions = subscribers.map((subscriber) => subscriber.on(event));
            await Promise.all(subscribersExecutions);
          }
        }
        message.ack();
      },
      { noAck: false }
    );
  }

  async publish(events: Array<IDomainEvent>): Promise<void> {
    const executions: any = [];
    // eslint-disable-next-line array-callback-return
    events.map((event) => {
      const message = new Message({
        data: {
          type: event.eventName,
          occurred_on: event.occurredOn,
          id: event.eventId,
          attributes: event.toPrimitive(),
        },
        meta: {},
      });
      this.logger.info(`[RabbitMqEventBus] Event to be published: ${event.eventName}`);
      executions.push(this.exchange.send(message));
    });

    await Promise.all(executions);
  }

  addSubscribers(subscribers: Array<IDomainEventSubscriber<IDomainEvent>>): void {
    // eslint-disable-next-line array-callback-return
    subscribers.map((subscriber) => {
      this.addSubscriber(subscriber);
    });
  }

  setDomainEventMapping(domainEventMapping: DomainEventMapping): void {
    this.deserializer = new DomainEventJsonDeserializer(domainEventMapping);
  }

  private addSubscriber(subscriber: IDomainEventSubscriber<IDomainEvent>): void {
    // eslint-disable-next-line array-callback-return
    subscriber.subscribedTo().map((event) => {
      const eventName = event.EVENT_NAME;
      if (this.subscribers.has(eventName)) {
        this.subscribers.get(eventName)!.push(subscriber);
      } else {
        this.subscribers.set(eventName, [subscriber]);
      }
    });
  }
}
