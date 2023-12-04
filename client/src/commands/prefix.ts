// imports
import type Command from '../types/command';

const execute = (input: string) => {
  global.prefix = input.replace(/&nbsp/g, ' ');
  console.log(`Command prefix set to ${input}`);
};

const prefix: Command = {
  names: ['prefix'],
  description: 'Usage: "prefix" <prefix> ; sets the command prefix to <prefix>, can use &nbsp for space',
  syntax: new RegExp(/^prefix\s.+/),
  usage: '"prefix" <prefix>',
  execute,
};

export default prefix;
