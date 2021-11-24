import { IDomainEvent, IDomainEventSubscriber } from '../eventbus/interfaces';
import { EventEmitter } from 'events';

export class EventEmitterBus extends EventEmitter {
  constructor(subscribers: Array<IDomainEventSubscriber<IDomainEvent>>) {
    super();

    this.registerSubscribers(subscribers);
  }

  registerSubscribers(subscribers?: IDomainEventSubscriber<IDomainEvent>[]) {
    // eslint-disable-next-line array-callback-return
    subscribers?.map((subscriber) => {
      this.registerSubscriber(subscriber);
    });
  }

  private registerSubscriber(subscriber: IDomainEventSubscriber<IDomainEvent>) {
    // eslint-disable-next-line array-callback-return
    subscriber.subscribedTo().map((event) => {
      this.on(event.EVENT_NAME, subscriber.on.bind(subscriber));
    });
  }

  publish(events: IDomainEvent[]): void {
    events.map((event) => this.emit(event.eventName, event));
  }
}
