// SERVER for Octopus 4.0.1-alpha
// you can set these meta info in your database: version, downloadUrl (for octopus updates)

// imports
import { Server, type Socket } from 'socket.io';
import { PrismaClient } from '@prisma/client';
import type Message from './types/message';
import readline from 'readline';
import express from 'express';
import http from 'http';

const prisma = new PrismaClient();

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

io.on('connection', async (socket: Socket) => {
  console.log(`new connection: ${socket.id}`);

  const messages = await prisma.message.findMany({
    select: {
      nickname: true,
      data: true,
      date: true,
    },
  });

  socket.on('disconnect', () => {
    console.log(`socket disconnected: ${socket.id}`);
  });

  socket.on('message', async (message: Message) => {
    if (message.nickname.length > 15) {
      return;
    }

    messages.push(message);

    await prisma.message.create({
      data: {
        ...message,
      },
    });

    io.emit('message', message);
  });

  socket.on('get-messages', () => {
    io.emit('get-messages', messages);
  });

  socket.on('get-version', async () => {
    const { value: version } = await prisma.meta.findFirst({
      select: {
        value: true,
      },
      where: {
        key: 'version',
      },
    });

    if (!version) {
      io.emit('get-version', { data: 0, downloadUrl: '*no version found*' });
      return;
    }

    const versionNumeric = Number(version);

    const { value: downloadUrl } = await prisma.meta.findFirst({
      select: {
        value: true,
      },
      where: {
        key: 'downloadUrl',
      },
    });

    if (!downloadUrl) {
      io.emit('get-version', { data: versionNumeric, downloadUrl: '*no download url found*' });
      return;
    }

    io.emit('get-version', { data: versionNumeric, downloadUrl });
  });
});

const serverCommand = async () => {
  while (true) {
    const input: string = await new Promise(resolve => {
      rl.question('server command: ', resolve);
    });

    switch (input) {
      case 'exit': {
        process.exit(0);
      }
      case 'clear': {
        console.clear();
        break;
      }
      case 'resetchat': {
        await prisma.message.deleteMany();
        break;
      }
      default: {
        console.log(`- Command "${input}" not found -`);
        break;
      }
    }
  }
};

serverCommand();
