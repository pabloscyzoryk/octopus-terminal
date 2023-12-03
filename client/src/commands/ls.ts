// imports
import arrayToStringWithNewLine from '../utils/arrayToStringWithNewLine';
import Command from '../types/command';
import fs from 'fs';

const execute = (input: string) => {
  const loc = input ? input : __dirname;

  if (!fs.existsSync(loc)) {
    console.log('- Directory not found -');
    return;
  }

  const files = fs.readdirSync(loc, { withFileTypes: true });

  if (files.length === 0) {
    console.log('- No files or folders found -');
    return;
  }

  console.log('in: ' + loc);

  console.log(
    arrayToStringWithNewLine(
      files.map(file => file.name),
      5,
    ),
  );
};

const ls: Command = {
  names: ['ls', 'dir'],
  description: 'Usage: "ls" <dir> or "dir" <dir> ; lists all files in the current directory or <dir>',
  syntax: new RegExp(/^(ls|dir)\b.*$/),
  usage: '"ls" or "dir"',
  execute,
};

export default ls;
