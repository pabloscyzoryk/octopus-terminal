// imports
import type Command from '../types/command';

const clear: Command = {
  names: ['clear', 'cls', 'c'],
  description: 'Usage: "clear" or "cls" or "c" ; clears the console',
  syntax: new RegExp(/^(clear|cls|c)$/),
  usage: '"clear" or "cls" or "c"',
  execute: () => console.clear(),
};

export default clear;