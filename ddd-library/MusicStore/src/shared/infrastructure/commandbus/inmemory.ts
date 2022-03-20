import { Command } from '../../domain/command';
import { CommandBus } from './../../domain/command-bus';
import { CommandHandlersInformation } from './handlers-information';

export class InMemoryCommandBus implements CommandBus {
  constructor(private commandHandlersInformation: CommandHandlersInformation) {}

  async dispatch(command: Command): Promise<void> {
    const handler = this.commandHandlersInformation.search(command);

    await handler.handle(command);
  }
}
