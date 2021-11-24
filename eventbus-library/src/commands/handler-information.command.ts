import { Command, ICommandHandler } from 'commands';
import { CommandNotFoundException } from '../exceptions/command-notfound.exception';

export class CommandHandlersInformation {
  private commandHandlersMap: Map<Command, ICommandHandler<Command>>;

  constructor(commandHandlers: Array<ICommandHandler<Command>>) {
    this.commandHandlersMap = this.formatHandlers(commandHandlers);
  }

  private formatHandlers(commandHandlers: Array<ICommandHandler<Command>>): Map<Command, ICommandHandler<Command>> {
    const handlersMap = new Map();

    commandHandlers.forEach((commandHandler) => {
      handlersMap.set(commandHandler.subscribedTo(), commandHandler);
    });

    return handlersMap;
  }

  public search(command: Command): ICommandHandler<Command> {
    const commandHandler = this.commandHandlersMap.get(command.constructor);

    if (!commandHandler) {
      throw new CommandNotFoundException(command);
    }

    return commandHandler;
  }
}
