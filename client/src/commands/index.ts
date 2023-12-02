// imports
import type Command from '../types/command';
import banner from './banner';
import help from './help';
import describe from './describe';
import clear from './clear';
import prefix from './prefix';
import nick from './nick';
import exit from './exit';
import evaluate from './evaulate';

const commands: Command[] = [banner, help, describe, clear, prefix, nick, exit, evaluate];

export default commands;
