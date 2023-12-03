// imports
import { isConnected, socketId } from '../utils/socket';
import type Command from '../types/command';

const execute = () => {
  if (isConnected) {
    console.log('Connected to the server with id: ' + socketId());
    return;
  }

  console.log('- Not connected to the server (try restarting the octopus client) -');
};

const connection: Command = {
  names: ['connection'],
  description: 'Usage: "connection" ; Shows the client-server connection status',
  usage: '"connection"',
  syntax: new RegExp(/^(connection)$/),
  execute,
};

export default connection;
