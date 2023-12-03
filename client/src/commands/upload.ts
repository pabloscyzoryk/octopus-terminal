// imports
import writeCommand from '../utils/writeCommand';
import type Command from '../types/command';
import supabase from '../supabase';
import path from 'path';
import fs from 'fs';

const execute = async (input: string) => {
  const filepaths = input.split(' ');

  global.isLoading = true;

  for (let i = 0; i < filepaths.length; i++) {
    const filepath = path.join(__dirname, filepaths[i]);
    const filename = path.basename(filepaths[i]);

    if (!fs.existsSync(filepath)) {
      console.log(`- File ${filename} not found -`);
      continue;
    }

    console.log('- Uploading file ' + filename + ' -');

    const file = fs.readFileSync(filepath);

    const { error } = await supabase.storage.from('storage').upload(filename, file, {
      upsert: true,
    });

    if (error) {
      console.error(`ERR (${filename}): ` + error.message);
      continue;
    }

    console.log(`- File ${filename} uploaded successfully -`);
  }

  global.isLoading = false;
  writeCommand();
};

const upload: Command = {
  names: ['upload'],
  description: 'Usage: "upload" <filepath1> <filepath2> ... ; uploads all files at <filepaths> to the server',
  syntax: new RegExp(/^upload\s.+/),
  usage: '"upload" <file>',
  execute,
};

export default upload;
