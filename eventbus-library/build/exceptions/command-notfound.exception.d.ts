import { Command } from 'commands';
export declare class CommandNotFoundException extends Error {
    constructor(command: Command);
}
