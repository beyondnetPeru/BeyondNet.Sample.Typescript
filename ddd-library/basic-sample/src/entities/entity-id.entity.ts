/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import { ValueObject } from '../valueobjects';
import { InvalidArgumentException } from '../exceptions/argument-invalid.exception';

export abstract class EntityId<T> extends ValueObject<T> {
  constructor(value: T) {
    if (!value) throw new InvalidArgumentException('the id cannot be null');

    super(value);
  }
}

export class AggregateId<TModel, T> extends EntityId<T> {
  constructor(value: T) {
    super(value);
  }

  public static From<TModel, T>(value: T): AggregateId<TModel, T> {
    return new AggregateId(value);
  }
}
