import { DomainEventMapping } from '../infrastructure/eventbus/domain-event-mapping';
import { DomainEvent } from './domain-event';
import { DomainEventSubscriber } from './domain-event-subscriber';

export interface EventBus {
  setDomainEventMapping(domainEventMapping: DomainEventMapping): void;
  publish(events: Array<DomainEvent>): Promise<void>;
  addSubscribers(subscribers: Array<DomainEventSubscriber<DomainEvent>>): void;
  start(): Promise<void>;
}
