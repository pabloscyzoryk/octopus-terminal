// imports
import writeCommand from './utils/writeCommand';
import banner from './commands/banner';

// globals
global.isLoading = false;
global.version = 4.0;
global.serialNumber = 'v4.0.0-alpha';
global.prefix = '> ';
global.nick = 'guest';
global.basicError = 'You have and error in your octopus syntax. Type "help" for more information.';

// app
(async () => {
  await banner.execute();
  console.log(`Welcome to the octopus ${global.serialNumber}!`);
  console.log('Type "help" to see all available commands.');
  writeCommand();
})();
