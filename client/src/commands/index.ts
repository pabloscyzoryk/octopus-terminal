// imports
import type Command from '../types/command';
import banner from './banner';
import help from './help';
import describe from './describe';
import clear from './clear';
import prefix from './prefix';
import nick from './nick';
import exit from './exit';
import evaluate from './evaluate';
import echo from './echo';
import chatOn from './chaton';
import chat from './chat';
import talk from './talk';
import roulette from './roulette';
import ls from './ls';
import read from './read';
import upload from './upload';

const commands: Command[] = [
  banner,
  help,
  describe,
  clear,
  prefix,
  nick,
  exit,
  evaluate,
  echo,
  chatOn,
  chat,
  talk,
  roulette,
  ls,
  read,
  upload,
];

export default commands;
