import { DomainEvent } from '../../../domain/domain-event';
import { DomainEventSubscriber } from '../../../domain/domain-event-subscriber';
import { EventBus } from '../../../domain/event-bus';
import { DomainEventMapping } from '../domain-event-mapping';
import { EventEmitterBus } from '../event-emitter-bus';

export class InMemoryAsyncEventBus implements EventBus {
  private bus: EventEmitterBus;

  constructor(subscribers: Array<DomainEventSubscriber<DomainEvent>>) {
    this.bus = new EventEmitterBus(subscribers);
  }

  async start(): Promise<void> {}

  async publish(events: DomainEvent[]): Promise<void> {
    this.bus.publish(events);
  }

  addSubscribers(subscribers: Array<DomainEventSubscriber<DomainEvent>>) {
    this.bus.registerSubscribers(subscribers);
  }

  setDomainEventMapping(domainEventMapping: DomainEventMapping): void {}
}
