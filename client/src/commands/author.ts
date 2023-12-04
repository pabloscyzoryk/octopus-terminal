// imports
import type Command from '../types/command';

const execute = () => {
  console.log(`
    Octopus ${global.version} by pabloscyzoryk
    GitHub: https://github.com/pabloscyzoryk/octopus-terminal
    Email: pawel.cyrzyk@gmail.com
    ------------------------------------------

    Octopus is a terminal-based chat and file sharing application.
    It's currently in development, but you can check the GitHub repo for updates.

    MIT License
  `);
};

const author: Command = {
  names: ['author', 'about'],
  description: 'Usage: "author" or "about" ; prints info about the author and the project',
  syntax: new RegExp(/^(author|about)$/),
  usage: '"author" or "about"',
  execute,
};

export default author;
