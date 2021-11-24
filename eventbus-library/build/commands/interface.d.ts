import { Command } from './base.command';
export interface ICommandBus {
    dispatch(command: Command): Promise<void>;
}
export interface ICommandHandler<T extends Command> {
    subscribedTo(): Command;
    handle(command: T): Promise<void>;
}
