import { DomainEventMapping } from 'eventbus/domain-mapping.event';
import { IDomainEvent, IDomainEventSubscriber, IEventBus } from 'eventbus/interfaces';

type Subscription = {
  boundedCallback: Function;
  originalCallback: Function;
};

export class InMemorySyncEventBus implements IEventBus {
  private subscriptions: Map<string, Array<Subscription>>;

  constructor() {
    this.subscriptions = new Map();
  }

  async start(): Promise<void> {}

  async publish(events: Array<IDomainEvent>): Promise<void> {
    const executions: any = [];
    // eslint-disable-next-line array-callback-return
    events.map((event) => {
      const subscribers = this.subscriptions.get(event.eventName);
      if (subscribers) {
        return subscribers.map((subscriber) => executions.push(subscriber.boundedCallback(event)));
      }
    });

    await Promise.all(executions);
  }

  addSubscribers(subscribers: Array<IDomainEventSubscriber<IDomainEvent>>) {
    subscribers.map((subscriber) =>
      subscriber.subscribedTo().map((event) => this.subscribe(event.EVENT_NAME!, subscriber))
    );
  }

  setDomainEventMapping(domainEventMapping: DomainEventMapping): void {}

  private subscribe(topic: string, subscriber: IDomainEventSubscriber<IDomainEvent>): void {
    const currentSubscriptions = this.subscriptions.get(topic);
    const subscription = { boundedCallback: subscriber.on.bind(subscriber), originalCallback: subscriber.on };
    if (currentSubscriptions) {
      currentSubscriptions.push(subscription);
    } else {
      this.subscriptions.set(topic, [subscription]);
    }
  }
}
