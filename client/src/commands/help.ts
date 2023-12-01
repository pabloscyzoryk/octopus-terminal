// imports
import commands from '.';
import Command from '../types/command';

const execute = () => {
  console.log('Available commands:');
  commands.forEach((command, index) => console.log(`${command.names.join(' / ')}${index !== commands.length - 1 ? ',' : ''}`));
  console.log('-> For more details, use "describe <command>"');
};

const help: Command = {
  names: ['help'],
  description: 'Usage: "help" ; prints all available commands',
  syntax: new RegExp(/^help$/),
  usage: '"help"',
  execute,
};

export default help;
