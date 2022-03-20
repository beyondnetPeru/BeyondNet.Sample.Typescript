import { StringValueObject } from '../value-object/string';

export class FilterValue extends StringValueObject {
  constructor(value: string) {
    super(value);
  }
}
