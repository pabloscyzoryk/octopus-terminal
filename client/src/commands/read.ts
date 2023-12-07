// imports
import type Command from '../types/command';
import path from 'path';
import fs from 'fs';

const execute = (input: string) => {
  const filepath = path.join(process.cwd(), input);

  if (!fs.existsSync(filepath)) {
    console.log('- File not found -');
    return;
  }

  fs.readFile(filepath, 'utf8', (err: any, data: any) => {
    if (err) {
      console.error('ERR: ' + err);
      return;
    }
    console.log(data);
  });
};

const read: Command = {
  names: ['read', 'more'],
  description: 'Usage: "read" <filepath> or "more" <filepath> ; prints contents of file at <filepath> to the console',
  syntax: new RegExp(/^(read|more)\s.+/),
  usage: '"read" <filename> or "more" <filename>',
  execute,
};

export default read;
