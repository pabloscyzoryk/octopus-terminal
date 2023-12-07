// imports
import type Command from '../types/command';
import supabase from '../supabase';
import path from 'path';
import fs from 'fs';
import writeCommand from '../utils/writeCommand';

const execute = async (input: string) => {
  const filepaths = input.split(' ');

  global.isLoading = true;

  for (let i = 0; i < filepaths.length; i++) {
    const { data, error } = await supabase.storage.from('storage').download(filepaths[i]);

    if (error) {
      console.error(`ERR (${filepaths[i]}): ` + error.message);
      continue;
    }

    const filepath = path.join(process.cwd(), filepaths[i]);
    const filename = path.basename(filepaths[i]);

    const blob = data;

    const buffer = Buffer.from(await blob.arrayBuffer());

    fs.writeFileSync(filepath, buffer);

    if (fs.existsSync(filepath)) {
      console.log(`- File ${filename} downloaded successfully -`);
    } else {
      console.log(`ERR (${filename}): Could not save the file  -`);
    }
  }

  global.isLoading = false;
  writeCommand();
};

const download: Command = {
  names: ['download'],
  description: 'Usage: "download" <filepath1> <filepath2> ... ; downloads all files at <filepaths> from the server',
  syntax: new RegExp(/^download\s.+/),
  usage: 'Usage: "download" <filepath1> <filepath2> ...',
  execute,
};

export default download;
