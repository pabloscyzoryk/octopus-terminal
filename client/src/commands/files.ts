// imports
import type Command from '../types/command';
import supabase from '../supabase';
import writeCommand from '../utils/writeCommand';
import arrayToStringWithNewLine from '../utils/arrayToStringWithNewLine';

const execute = async () => {
  global.isLoading = true;
  const { data, error } = await supabase.storage.from('storage').list('', {
    limit: 100,
    offset: 0,
  });

  if (error) {
    console.error('ERR: ' + error.message);
    global.isLoading = false;
    writeCommand();
    return;
  }

  if (data.length === 0) {
    console.log('- No files found -');
    global.isLoading = false;
    writeCommand();
    return;
  }

  console.log('- Files ready to download -');

  const results = data.map(file => file.name);

  console.log(arrayToStringWithNewLine(results, 5));

  global.isLoading = false;
  writeCommand();
};

const files: Command = {
  names: ['files'],
  description: 'Usage: "files" ; lists all files available on the server',
  syntax: new RegExp(/^files$/),
  usage: '"files"',
  execute,
};

export default files;
