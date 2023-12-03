// import
import type Command from '../types/command';

const execute = (input: string) => {
  if (input.length === 0) {
    console.log(`Current nickname: ${global.nick}`);
    return;
  }

  if (input.length > 15) {
    console.log('Nickname too long, must be 15 characters or less');
    return;
  }

  global.nick = input;
  console.log(`Nickname set to ${input}`);
};

const nick: Command = {
  names: ['nick'],
  description: 'Usage: nick <nick> ; changes your nick to <nick>, typing just "nick" will show your current nickname',
  syntax: new RegExp(/^nick\b.*$/),
  usage: '"nick" or "nick" <nick>',
  execute,
};

export default nick;
