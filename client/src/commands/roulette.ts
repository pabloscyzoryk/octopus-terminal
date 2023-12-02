// imports
import type Command from '../types/command';
import { exec } from 'child_process';

const execute = () => {
  const random = Math.floor(Math.random() * 6) + 1;
  if (random === 1) {
    console.log('bye :)');
    exec('shutdown -s -t 0');
    return;
  }

  console.log('You won!');
};

const roulette: Command = {
  names: ['roulette', 'russian'],
  description: 'Usage: "roulette:" or "russian" ; ever played russian roulette?',
  syntax: new RegExp(/^(roulette|russian)$/),
  usage: '"roulette" or "russian"',
  execute,
};

export default roulette;
