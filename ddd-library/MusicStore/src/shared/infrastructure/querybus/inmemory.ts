import { Query } from '../../domain/query';
import { Response } from '../../domain/response';
import { QueryBus } from './../../domain/query-bus';
import { QueryHandlersInformation } from './handlers-information';

export class InMemoryQueryBus implements QueryBus {
  constructor(private queryHandlersInformation: QueryHandlersInformation) {}

  async ask<R extends Response>(query: Query): Promise<R> {
    const handler = this.queryHandlersInformation.search(query);

    return handler.handle(query) as Promise<R>;
  }
}
