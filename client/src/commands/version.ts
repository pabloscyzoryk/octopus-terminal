// imports
import Command from '../types/command';

const execute = () => {
  console.log('VERSION: ' + global.version);
};

const version: Command = {
  names: ['version'],
  description: 'Usage: "version" ; Shows the version of the client',
  usage: '"version"',
  syntax: new RegExp(/^(version)$/),
  execute,
};

export default version;