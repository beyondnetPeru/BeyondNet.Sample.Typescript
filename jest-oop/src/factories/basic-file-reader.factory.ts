import fs from 'fs';
import { File } from './file';

const directoryPath = __dirname;

export class BasicFileReader {
  private fileList: Array<File> = [];

  PrintFiles = () => {
    const directoryFiles = fs.readdirSync(directoryPath);

    directoryFiles.forEach((file) => {
      this.fileList.push(new File(file));
    });

    this.fileList.forEach((file) => {
      console.log(file.Name);
    });
  };
}
