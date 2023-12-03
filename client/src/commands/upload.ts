// imports
import writeCommand from '../utils/writeCommand';
import type Command from '../types/command';
import supabase from '../supabase';
import path from 'path';
import fs from 'fs';

const execute = async (input: string) => {
  const filepath = path.join(__dirname, input);
  const filename = path.basename(input);

  if (!fs.existsSync(filepath)) {
    console.log('- File not found -');
    return;
  }

  global.isLoading = true;

  const file = fs.readFileSync(filepath);

  const { error } = await supabase.storage.from('storage').upload(filename, file, {
    upsert: true,
  });

  if (error) {
    console.error('ERR: ' + error.message);
    global.isLoading = false;
    writeCommand();
    return;
  }

  global.isLoading = false;
  console.log(`- File ${filename} uploaded successfully -`);
  writeCommand();
};

const upload: Command = {
  names: ['upload'],
  description: 'Usage: "upload" <filepath> ; uploads file at <filepath> to the server',
  syntax: new RegExp(/^upload\s.+/),
  usage: '"upload" <file>',
  execute,
};

export default upload;
