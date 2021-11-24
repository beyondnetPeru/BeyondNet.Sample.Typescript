import { ISample } from './core/interfaces';
import { FileReaderApp } from './factories/file-reader.factory';

const sample: ISample = new FileReaderApp();
sample.Run();
