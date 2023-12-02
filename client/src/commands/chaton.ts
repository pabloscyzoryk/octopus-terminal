// imports
import { socketEmit, socketOn, socketOff } from '../utils/socket';
import type Message from '../types/message';
import writeCommand, { rl } from '../utils/writeCommand';
import Command from '../types/command';
import clearLastLines from '../utils/clearLastLines';

let isChatLoading = false;
let messages: Message[] = [];

const updateChat = (data: Message[]) => {
  if (data.length === 0) {
    console.log('- No messages in chat -');
    return;
  }

  data.forEach(message => {
    console.log(`${message.nickname}: ${message.data}`);
  });
};

const updateChatRealTime = (data: Message) => {
  console.log(`${data.nickname}: ${data.data}`);
};

const writeMessage = async () => {
  while (true) {
    if (isChatLoading) {
      break;
    }
    const input: string = await new Promise(resolve => {
      rl.question('Enter message: ', resolve);
    });

    clearLastLines(2);

    if (!input.trim()) {
      return;
    }

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
    messages.push(message);
    updateChatRealTime(message);
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
