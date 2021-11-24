import { Command, ICommandBus } from 'commands';
import { CommandHandlersInformation } from './handler-information.command';
export declare class InMemoryCommandBus implements ICommandBus {
    private commandHandlersInformation;
    constructor(commandHandlersInformation: CommandHandlersInformation);
    dispatch(command: Command): Promise<void>;
}
