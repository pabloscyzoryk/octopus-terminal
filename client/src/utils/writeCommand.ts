// imports
import runCommand from './runCommand';
import clearLastLines from './clearLastLines';
import { rl } from './rl';

const writeCommand = async () => {
  while (true) {
    if (global.cliMode) process.exit(0);
    if (global.isLoading) break;
    const input: string = await new Promise(resolve => {
      rl.question(prefix, resolve);
    });
    clearLastLines(1);
    runCommand(input.trim());
  }
};

export default writeCommand;
