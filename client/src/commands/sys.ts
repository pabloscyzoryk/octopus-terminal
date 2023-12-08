// imports
import writeCommand from '../utils/writeCommand';
import type Command from '../types/command';
import { exec } from 'child_process';

const execute = (input: string) => {
  global.isLoading = true;

  exec(input, (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return;
    }

    if (stderr) {
      console.error(stderr);
      return;
    }

    console.log(stdout);
  });

  global.isLoading = false;
  writeCommand();
};

const sys: Command = {
  names: ['sys', 'system'],
  description: 'Usage: "sys" <command> or "system" <command>; executes <command> on the host system',
  syntax: new RegExp(/^(sys|system)\s.+/),
  usage: '"sys" <command> or "system" <command>',
  execute,
};

export default sys;
