import { Query } from './base.query';
import { Response } from '../response';

export interface IQueryBus {
  Query<R extends Response>(query: Query): Promise<R>;
}

export interface IQueryHandler<Q extends Query, R extends Response> {
  subscribedTo(): Query;
  handle(query: Q): Promise<R>;
}
