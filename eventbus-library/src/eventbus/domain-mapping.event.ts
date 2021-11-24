import { DomainEventClass, IDomainEvent, IDomainEventSubscriber } from './interfaces';

type Mapping = Map<string, DomainEventClass>;

export class DomainEventMapping {
  private mapping: Mapping;

  constructor(mapping: IDomainEventSubscriber<IDomainEvent>[]) {
    this.mapping = mapping.reduce(this.eventsExtractor(), new Map<string, DomainEventClass>());
  }

  private eventsExtractor() {
    return (map: Mapping, subscriber: IDomainEventSubscriber<IDomainEvent>) => {
      subscriber.subscribedTo().forEach(this.eventNameExtractor(map));
      return map;
    };
  }

  private eventNameExtractor(map: Mapping): (domainEvent: DomainEventClass) => void {
    return (domainEvent) => {
      const eventName = domainEvent.EVENT_NAME;
      map.set(eventName, domainEvent);
    };
  }

  for(name: string) {
    const domainEvent = this.mapping.get(name);

    if (!domainEvent) {
      return;
    }

    return domainEvent;
  }
}
