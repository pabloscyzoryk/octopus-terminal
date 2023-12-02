// imports
import type Command from '../types/command';
import { socketEmit } from '../utils/socket';
import type Message from '../types/message';

const execute = (input: string) => {
  const message: Message = { data: input, nickname: global.nick, date: new Date() };
  socketEmit('message', message);
  console.log('- Message sent -');
};

const talk: Command = {
  names: ['talk'],
  description: 'Usage: "talk" <message> ; sends <message> to the chat',
  syntax: new RegExp(/^talk\s.+/),
  usage: '"talk" <message>',
  execute,
};

export default talk;
