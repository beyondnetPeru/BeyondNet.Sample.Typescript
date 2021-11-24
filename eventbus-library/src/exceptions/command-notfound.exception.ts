import { Command } from 'commands';

export class CommandNotFoundException extends Error {
  constructor(command: Command) {
    super(`The command <${command.constructor.name}> hasn't a command handler associated`);
  }
}
