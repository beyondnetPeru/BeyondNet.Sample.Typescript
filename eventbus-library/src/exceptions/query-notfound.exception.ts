import { Query } from 'queries/base.query';

export class QueryNotFoundException extends Error {
  constructor(query: Query) {
    super(`The query <${query.constructor.name}> hasn't a query handler associated`);
  }
}
