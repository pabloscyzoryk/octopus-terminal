// imports
import Command from '../types/command';

const execute = () => {
  console.log('VERSION: ' + global.version);
  console.log('SERIAL NUMBER: ' + global.serialNumber);
};

const version: Command = {
  names: ['version'],
  description: 'Usage: "version" ; Shows the version of the client',
  usage: '"version"',
  syntax: new RegExp(/^(version)$/),
  execute,
};

export default version;