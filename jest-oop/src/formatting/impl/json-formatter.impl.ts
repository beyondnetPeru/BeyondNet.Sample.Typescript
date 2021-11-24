import { IFormatter } from '../interfaces/formatter.interface';

export class JsonFormatter implements IFormatter {
  Format(value: object): string {
    return JSON.stringify(value);
  }
}
