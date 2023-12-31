// imports
import type Command from '../types/command';
import writeCommand from '../utils/writeCommand';
import figlet from 'figlet';

const createBanner = (logo: string) =>
  new Promise((resolve, reject) => {
    figlet(logo, (error: Error, data: string) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(data);
    });
  });

const execute = async (input?: string) => {
  global.isLoading = true;

  const banner = await createBanner(input || 'Octopus');
  console.log(banner);

  global.isLoading = false;
  writeCommand();
};

const banner: Command = {
  names: ['banner'],
  description: 'Usage: "banner" ; prints the Octopus banner',
  syntax: new RegExp(/^banner\b.*$/),
  usage: '"banner"',
  execute,
};

export default banner;
