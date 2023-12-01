// imports
import type Command from '../types/command';

const execute = () => {
  console.log('banner - OCTOPUS -');
};

const banner: Command = {
  names: ['banner'],
  description: 'Usage: "banner" ; prints the octopus banner',
  syntax: new RegExp(/^banner\b.*$/),
  usage: '"banner"',
  execute: () => execute()
};

export default banner;
