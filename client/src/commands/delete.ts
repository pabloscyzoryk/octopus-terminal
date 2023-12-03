// imports
import type Command from '../types/command';
import supabase from '../supabase';

const execute = async (input: string) => {
  const files = input.split(' ');
  global.isLoading = true;

  for (let i = 0; i < files.length; i++) {
    const { error } = await supabase.storage.from('storage').remove([files[i]]);
    if (error) {
      console.error(`ERR (${files[i]}): ` + error.message);
      continue;
    }
    console.log(`- File ${files[i]} deleted successfully -`);
  }
};

const deleteCommand: Command = {
  names: ['delete', 'del'],
  description:
    'Usage: "delete" <filename1> <filename2> ... or "del" <filename> <filename2> ... ; deletes all files at <filenames> from the server',
  syntax: new RegExp(/^(delete|del)\s.+/),
  usage: '"delete" <filename1> <filename2> ... or "del" <filename> <filename2> ... ',
  execute,
};

export default deleteCommand;