import { ISample } from '../core/interfaces';
import { BasicFileReader } from './basic-file-reader.factory';

export class FileReaderApp implements ISample {
  Run(): void {
    const basicReader = new BasicFileReader();
    basicReader.PrintFiles();
  }
}
