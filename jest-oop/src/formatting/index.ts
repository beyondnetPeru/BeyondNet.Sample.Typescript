import { FormatExecutor } from './format.executor';
import { JsonFormatter } from './impl/json-formatter.impl';

const executor = new FormatExecutor(new JsonFormatter());
executor.PrintObject({ name: 'beyondnet' });

console.log('Hello world!');
