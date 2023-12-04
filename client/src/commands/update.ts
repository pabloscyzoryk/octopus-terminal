// imports
import Command from '../types/command';
import { socketEmit, socketOn, socketOff } from '../utils/socket';
import writeCommand from '../utils/writeCommand';

const execute = async () => {
  global.isLoading = true;
  socketEmit('get-version');

  socketOn('get-version', ({ data, downloadUrl }: { data: number; downloadUrl: string }) => {
    socketOff('get-version');

    console.log(`- Latest version: ${data} -`);
    console.log(`- Current version: ${global.version.toFixed(1)} -`);

    if (data > global.version) {
      console.log(`- Update available at ${downloadUrl}-`);
      global.isLoading = false;
      writeCommand();
      return;
    }

    console.log('- Everything up to date -');
    global.isLoading = false;
    writeCommand();
  });
};

const update: Command = {
  names: ['update'],
  description: 'Usage: "update" ; checks for updates',
  syntax: new RegExp(/^(update)$/),
  execute,
  usage: '"update"',
};

export default update;
