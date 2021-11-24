import { IEncoder } from './interfaces';

export class HtmlEncoder implements IEncoder {
  Encode(value: string): string {
    throw new Error('Method not implemented.');
  }
}
