// imports
import readline from 'readline';
import runCommand from './runCommand';

// readline init
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const writeCommand = async () => {
  while (true) {
    if (global.isLoading) break;
    const input: string = await new Promise(resolve => {
      rl.question(prefix, resolve);
    });
    runCommand(input.trim());
  }
};

export default writeCommand;