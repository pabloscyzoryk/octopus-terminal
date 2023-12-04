// CLIENT for Octopus 4.0.1-alpha
// imports
import clearLastLines from './utils/clearLastLines';
import writeCommand from './utils/writeCommand';
import banner from './commands/banner';
import { rl } from './utils/rl';

// globals
global.isLoading = false;
global.version = 4.1;
global.serialNumber = 'v4.0.1-alpha';
global.prefix = '> ';
global.nick = 'guest';
global.basicError = 'You have and error in your octopus syntax. Type "help" for more information.';

// app
const main = async () => {
  await banner.execute();
  console.log(`Welcome to the octopus ${global.serialNumber}!
  Type "help" to see all available commands.
  `);
  writeCommand();
};

// password protected version

// NEVER change this:
let input = '';

// MAYBE change this (not recommended):
let prompt = '';

// change this (OPTIONAL, "szczur" is nice):
let password = 'szczur'; // <- password example

(async () => {
  do {
    input = await new Promise(resolve => {
      rl.question(prompt, resolve);
    });
    clearLastLines(1);
  } while (input != password);

  console.clear();
  main();
})();

// unprotected version
// main();
