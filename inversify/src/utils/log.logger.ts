import { interfaces, Container } from "inversify";

export const logger = (planAndResolve: interfaces.Next): interfaces.Next => {
  return (args: interfaces.NextArgs) => {
    let start = new Date().getTime();
    let result = planAndResolve(args);
    let end = new Date().getTime();
    console.log(`${end - start} Logging`);
    return result;
  };
};
