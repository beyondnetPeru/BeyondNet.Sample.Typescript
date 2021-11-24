import { Command, ICommandBus } from 'commands';
import { CommandHandlersInformation } from './handler-information.command';

export class InMemoryCommandBus implements ICommandBus {
  // eslint-disable-next-line no-useless-constructor
  constructor(private commandHandlersInformation: CommandHandlersInformation) {}

  async dispatch(command: Command): Promise<void> {
    const handler = this.commandHandlersInformation.search(command);

    await handler.handle(command);
  }
}
