import { DomainEvent } from 'entities/domain-event.entity';

export interface IAggregateRoot {
  DomainEvents(): Array<DomainEvent>;
  AddDomainEvent(event: DomainEvent): void;
  RemoveDomainEvent(event: DomainEvent): void;
  ClearDomainEvents(): void;
}

export abstract class AggregateRoot implements IAggregateRoot {
  private domainEvents: Array<DomainEvent>;

  constructor() {
    this.domainEvents = [];
  }

  DomainEvents = (): Array<DomainEvent> => this.domainEvents;

  AddDomainEvent = (event: DomainEvent): void => {
    this.domainEvents.push(event);
  };

  RemoveDomainEvent = (event: DomainEvent): void => {
    const index: Number = this.domainEvents.indexOf(event);

    if (index === -1) return;

    this.domainEvents.splice(this.domainEvents.indexOf(event), 1);
  };

  ClearDomainEvents = () => {
    this.domainEvents = [];
  };
}
