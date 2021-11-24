import { IFormatter } from "./interfaces/formatter.interface";

export class FormatExecutor {
  private readonly formatter: IFormatter;

  constructor(formatter: IFormatter) {
    this.formatter = formatter;
  }

  PrintObject(object: any): void {
    const objectFormatted = this.formatter.Format(object);

    console.log(`Object formatted: ${objectFormatted} from => ${object}`);
  }
}
