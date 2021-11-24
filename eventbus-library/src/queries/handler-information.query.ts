import { Query } from './base.query';
import { IQueryHandler } from './interfaces';
import { Response } from '../response';
import { QueryNotFoundException } from '../exceptions/query-notfound.exception';

export class QueryHandlersInformation {
  private queryHandlersMap: Map<Query, IQueryHandler<Query, Response>>;

  constructor(queryHandlers: Array<IQueryHandler<Query, Response>>) {
    this.queryHandlersMap = this.formatHandlers(queryHandlers);
  }

  private formatHandlers(
    queryHandlers: Array<IQueryHandler<Query, Response>>
  ): Map<Query, IQueryHandler<Query, Response>> {
    const handlersMap = new Map();

    queryHandlers.forEach((queryHandler) => {
      handlersMap.set(queryHandler.subscribedTo(), queryHandler);
    });

    return handlersMap;
  }

  public search(query: Query): IQueryHandler<Query, Response> {
    const queryHandler = this.queryHandlersMap.get(query.constructor);

    if (!queryHandler) {
      throw new QueryNotFoundException(query);
    }

    return queryHandler;
  }
}
