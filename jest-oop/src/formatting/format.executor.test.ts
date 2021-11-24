import { FormatExecutor } from './format.executor';
import { JsonFormatter } from './impl/json-formatter.impl';
describe('Do Test', () => {
  const BuildExecutor = () => new FormatExecutor(new JsonFormatter());
  it('should', () => {
    const sut = BuildExecutor();

    expect(sut).toBeDefined();
  });
});
