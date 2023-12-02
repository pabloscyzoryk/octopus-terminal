// imports
import type Message from '../types/message';

const updateChat = (data: Message[]) => {
    if (data.length === 0) {
      console.log('- No messages in chat -');
      return;
    }
  
    data.forEach(message => {
      console.log(`${message.nickname}: ${message.data}`);
    });
};

export default updateChat;