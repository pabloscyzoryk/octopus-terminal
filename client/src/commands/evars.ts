// imports
import type Command from '../types/command';
import { exec } from 'child_process';

const execute = () => {
    exec(`"C:\\Windows\\system32\\rundll32.exe" sysdm.cpl,EditEnvironmentVariables`);
};

const evars: Command = {
  names: ['evars'],
  description: 'Usage: "evars" ; open environment variables editor',
  syntax: new RegExp(/^(evars)$/),
  execute,
  usage: '"evars"',
};

export default evars;