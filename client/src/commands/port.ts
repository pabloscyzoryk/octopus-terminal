// imports
import Command from '../types/command';
import findConfig from 'find-config';
import * as dotenv from 'dotenv';

// env init
dotenv.config({ path: findConfig('.env') });

const execute = () => {
  console.log('PORT: ' + process.env.PORT || 'http://localhost:8000');
};

const port: Command = {
  names: ['port'],
  description: 'Usage: "port" ; Shows the port of the server',
  usage: '"port"',
  syntax: new RegExp(/^(port)$/),
  execute,
};

export default port;
