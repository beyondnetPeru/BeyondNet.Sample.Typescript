import { Query } from 'queries/base.query';
export declare class QueryNotFoundException extends Error {
    constructor(query: Query);
}
