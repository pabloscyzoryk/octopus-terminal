// imports
import { socketEmit, socketOn, socketOff } from '../utils/socket';
import type Message from '../types/message';
import writeCommand, { rl } from '../utils/writeCommand';
import Command from '../types/command';
import clearLastLines from '../utils/clearLastLines';
import updateChat from '../utils/updateChat';

let isChatLoading = false;
let messages: Message[] = [];

const writeMessage = async () => {
  while (true) {
    if (isChatLoading) {
      break;
    }

    let input = '';
    do {
      input = await new Promise(resolve => {
        rl.question('Enter message: ', resolve);
      });
    } while(!input.trim())

    clearLastLines(2);

    switch (input) {
      case 'chatoff': {
        socketOff('message');
        socketOff('get-messages');
        isChatLoading = false;
        global.isLoading = false;
        console.log('- Chat mode disabled -');
        writeCommand();
        break;
      }
      case 'chatclear': {
        console.clear();
        messages = [];
        updateChat(messages);
        break;
      }
      case 'help': {
        console.log('Available chat mode commands:');
        console.log('chatoff - exit chat mode');
        console.log('chatclear - clear chat');
        break;
      }
      default: {
        socketEmit('message', { nickname: global.nick, data: input, date: new Date() });
        isChatLoading = true;
      }
    }
  }
};

const execute = () => {
  global.isLoading = true;

  socketEmit('get-messages');
  socketOn('get-messages', (data: Message[]) => {
    messages = [...data];
    updateChat(messages);
    socketOff('get-messages');
    isChatLoading = false;
    writeMessage();
  });

  socketOn('message', message => {
    isChatLoading = true;
    messages.push(message);
    updateChat(messages);
    isChatLoading = false;
    writeMessage();
  });
};

const chatOn: Command = {
  names: ['chaton'],
  usage: '"chaton"',
  description:
    'Usage: "chaton" ; shows messags from chat and updates them in real time, use "help" when in chat mode to see chat related commands"',
  syntax: new RegExp(/^(chaton)$/),
  execute,
};

export default chatOn;
