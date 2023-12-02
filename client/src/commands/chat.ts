// imports
import type Command from '../types/command';
import { socketEmit, socketOn, socketOff } from '../utils/socket';
import type Message from '../types/message';
import writeCommand from '../utils/writeCommand';
import updateChat from '../utils/updateChat';

const execute = () => {
  global.isLoading = true;
  socketEmit('get-messages');
  socketOn('get-messages', (data: Message[]) => {
    socketOff('get-messages');
    updateChat(data);
    global.isLoading = false;
    writeCommand();
  });
};

const chat: Command = {
  names: ['chat'],
  description: 'Usage: "chat" ; show all chat messages',
  syntax: new RegExp(/^(chat)$/),
  execute,
  usage: '"chat"',
};

export default chat;
