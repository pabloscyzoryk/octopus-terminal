// imports
import readline from 'readline';
import runCommand from './runCommand';
import clearLastLines from './clearLastLines';

// readline init
export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const writeCommand = async () => {
  while (true) {
    if (global.isLoading) break;
    const input: string = await new Promise(resolve => {
      rl.question(prefix, resolve);
    });
    clearLastLines(1);
    runCommand(input.trim());
  }
};

export default writeCommand;