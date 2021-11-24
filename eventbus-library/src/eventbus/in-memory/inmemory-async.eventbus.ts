import { DomainEventMapping } from 'eventbus/domain-mapping.event';
import { EventEmitterBus } from 'eventbus/event-emitter.eventbus';
import { IDomainEvent, IDomainEventSubscriber, IEventBus } from 'eventbus/interfaces';

export class InMemoryAsyncEventBus implements IEventBus {
  private bus: EventEmitterBus;

  constructor(subscribers: Array<IDomainEventSubscriber<IDomainEvent>>) {
    this.bus = new EventEmitterBus(subscribers);
  }

  async start(): Promise<void> {}

  async publish(events: IDomainEvent[]): Promise<void> {
    this.bus.publish(events);
  }

  addSubscribers(subscribers: Array<IDomainEventSubscriber<IDomainEvent>>) {
    this.bus.registerSubscribers(subscribers);
  }

  setDomainEventMapping(domainEventMapping: DomainEventMapping): void {}
}
