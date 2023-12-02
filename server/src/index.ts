// imports
import { Server, type Socket } from 'socket.io';
import express from 'express';
import http from 'http';

const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: '*' },
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

console.log('Server up and running! :)');

io.on('connection', (socket: Socket) => {
    console.log(`new connection: ${socket.id}`);

    socket.on('disconnect', () => {
        console.log(`socket disconnected: ${socket.id}`);
    });

    socket.on('message', (nickname: string, data: string) => {
        io.emit('message', nickname, data, new Date());
    });

    socket.on('typing', (nickname: string) => {
        io.emit('typing', nickname);
    });

    socket.on('stop-typing', (nickname: string) => {
        io.emit('stop-typing', nickname);
    });

    socket.on('clear-chat', () => {
        io.emit('clear-chat');
    });

});
