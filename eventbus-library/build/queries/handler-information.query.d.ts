import { Query } from './base.query';
import { IQueryHandler } from './interfaces';
import { Response } from '../response';
export declare class QueryHandlersInformation {
    private queryHandlersMap;
    constructor(queryHandlers: Array<IQueryHandler<Query, Response>>);
    private formatHandlers;
    search(query: Query): IQueryHandler<Query, Response>;
}
