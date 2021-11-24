import { Response } from 'response';
import { Query } from './base.query';
import { QueryHandlersInformation } from './handler-information.query';
import { IQueryBus } from './interfaces';

export class InMemoryQueryBus implements IQueryBus {
  // eslint-disable-next-line no-useless-constructor
  constructor(private queryHandlersInformation: QueryHandlersInformation) {}

  async Query<R extends Response>(query: Query): Promise<R> {
    const handler = this.queryHandlersInformation.search(query);

    return handler.handle(query) as Promise<R>;
  }
}
