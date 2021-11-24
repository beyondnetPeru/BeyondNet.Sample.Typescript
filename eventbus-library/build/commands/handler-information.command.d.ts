import { Command, ICommandHandler } from 'commands';
export declare class CommandHandlersInformation {
    private commandHandlersMap;
    constructor(commandHandlers: Array<ICommandHandler<Command>>);
    private formatHandlers;
    search(command: Command): ICommandHandler<Command>;
}
