import { injectable } from "inversify";
import { IFormatter } from "../formatter.interface";
import "reflect-metadata";

@injectable()
export class JsonFormatter implements IFormatter<object, string> {
  Format(value: object): string {
    if (!value) throw new Error("Value cannot be null or undefined");

    return JSON.stringify(value);
  }
}
