import { io } from 'socket.io-client';
import findConfig from 'find-config';
import * as dotenv from 'dotenv';

// env init
dotenv.config({ path: findConfig('.env') });

const PORT = process.env.PORT || 'http://localhost:8000';

const socket = io(PORT);

export const socketEmit = (eventName: string, ...data: any[]) => {
  socket.emit(eventName, ...data);
};

export const socketOn = (eventName: string, callback: (data: any) => void) => {
  socket.on(eventName, callback);
};

export const socketOff = (eventName: string) => {
  socket.off(eventName);
};

export const socketDisconnect = () => {
  socket.disconnect();
};

export const isConnected = () => socket.connected;
export const socketConnect = () => socket.connect();
export const socketId = () => socket.id;