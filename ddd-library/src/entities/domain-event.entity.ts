import { v4 as uuidv4 } from 'uuid';

export abstract class DomainEvent {
  static EVENT_NAME: string;

  readonly aggregateId: string;
  readonly eventId: string;
  readonly occurredOn: Date;
  readonly eventName: string;

  static fromPrimitives: (...args: any[]) => any;

  constructor(eventName: string, aggregateId: string, eventId?: string, occurredOn?: Date) {
    this.aggregateId = aggregateId;
    this.eventId = eventId || uuidv4();
    this.occurredOn = occurredOn || new Date();
    this.eventName = eventName;
  }

  abstract toPrimitive(): Object;
}

export type DomainEventClass = { EVENT_NAME: string; fromPrimitives(...args: any[]): DomainEvent };
