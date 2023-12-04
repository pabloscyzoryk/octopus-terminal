// imports
import type Command from '../types/command';
import commands from '.';

const execute = (input: string) => {
  if (input === 'all') {
    commands.forEach(command => {
      console.log(`${command.names[0]}: ${command.description}`);
    });
    return;
  }

  const command = commands.find(command => command.names.includes(input));

  if (command) {
    console.log(command.description);
    return;
  }

  console.log(`Command ${input} not found. Check available commands with "help"`);
};

const describe: Command = {
  names: ['describe', 'desc'],
  description:
    'Usage: "describe or "desc" <command>" ; prints the description of the given command. Write "describe all" or "desc all" to describe all commands',
  syntax: new RegExp(/^(describe|desc)\s.+/),
  usage: '"describe or "desc" <command>"',
  execute,
};

export default describe;
