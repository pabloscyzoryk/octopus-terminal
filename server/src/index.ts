// imports
import { Server, type Socket } from 'socket.io';
import type Message from './types/message';
import readline from 'readline';
import express from 'express';
import http from 'http';

const app = express();
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

// readline init
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const io = new Server(server, {
  cors: { origin: '*' },
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

console.log('Server up and running! :)');

const messages: Message[] = [];

io.on('connection', (socket: Socket) => {
  console.log(`new connection: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`socket disconnected: ${socket.id}`);
  });

  socket.on('message', (message: Message) => {
    messages.push(message);
    io.emit('message', message);
  });

  socket.on('get-messages', () => {
    io.emit('get-messages', messages);
  });
});

const serverCommand = async () => {
  while (true) {
    const input: string = await new Promise(resolve => {
      rl.question('server command: ', resolve);
    });
  }
};

serverCommand();
