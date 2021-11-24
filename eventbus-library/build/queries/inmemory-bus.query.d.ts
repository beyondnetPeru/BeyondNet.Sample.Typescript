import { Response } from 'response';
import { Query } from './base.query';
import { QueryHandlersInformation } from './handler-information.query';
import { IQueryBus } from './interfaces';
export declare class InMemoryQueryBus implements IQueryBus {
    private queryHandlersInformation;
    constructor(queryHandlersInformation: QueryHandlersInformation);
    Query<R extends Response>(query: Query): Promise<R>;
}
