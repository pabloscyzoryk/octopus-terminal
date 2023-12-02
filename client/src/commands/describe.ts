// imports
import type Command from '../types/command';
import commands from '.';

const execute = (input: string) => {
  const command = commands.find(command => command.names.includes(input));

  if (command) {
    console.log(command.description);
    return;
  }

  console.log(`Command ${input} not found. Check available commands with "help"`);
};

const describe: Command = {
  names: ['describe', 'desc'],
  description: 'Usage: "describe or "desc" <command>" ; prints the description of the given command',
  syntax: new RegExp(/^(describe|desc)\s.+/),
  usage: '"describe or "desc" <command>"',
  execute,
};

export default describe;