// CLIENT for Octopus 4.0.1-alpha
// imports
import clearLastLines from './utils/clearLastLines';
import writeCommand from './utils/writeCommand';
import banner from './commands/banner';
import { rl } from './utils/rl';
import cli from './cli';

// globals
global.isLoading = false;
global.version = 4.1;
global.serialNumber = 'v4.0.1-alpha';
global.prefix = '> ';
global.nick = 'guest';
global.basicError = 'You have an error in your octopus syntax. Type "help" for more information.';
global.cliMode = false;
global.password = 'szczur'; // <- password for cli and the octopus app (leave an empty string to use cli and the app without a password)
                            // you can change it, but "szczur" is nice :)

cli(process.argv); // <- cli mode open, comment this line to disable

// octopus app
const main = async () => {
  await banner.execute();
  console.log(`Welcome to the octopus ${global.serialNumber}!
  Type "help" to see all available commands.
  `);
  
  writeCommand();
};

// NEVER change this:
let input = '';

// MAYBE change this (not recommended):
let prompt = '';

(async () => {
  if (global.cliMode) return;
  if (global.password) {
    do {
      input = await new Promise(resolve => {
        rl.question(prompt, resolve);
      });
      clearLastLines(1);
    } while (input !== global.password);
  }
  console.clear();
  await main();
})();