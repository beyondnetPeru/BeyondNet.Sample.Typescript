import { injectable } from "inversify";
import { IFormatter } from "../formatter.interface";
import "reflect-metadata";

@injectable()
export class TextFormatter implements IFormatter<object, string> {
  Format(value: object): string {
    return JSON.stringify(value).replace("{", "").replace("}", "");
  }
}
