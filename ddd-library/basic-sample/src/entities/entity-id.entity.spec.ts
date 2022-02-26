import { AggregateRoot } from './aggregate-root.entity';
import { AggregateId } from './entity-id.entity';

describe('Entities - AggregateId', () => {
  it('should create an aggregate Id', () => {
    class Foo extends AggregateRoot {}

    const sut = AggregateId.From<Foo, string>('foo');

    expect(sut).toBeDefined();

    expect(sut.props).toBe('foo');
  });
});
