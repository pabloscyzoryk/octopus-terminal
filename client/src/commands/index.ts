// imports
import type Command from '../types/command';
import banner from './banner';
import help from './help';
import describe from './describe';
import clear from './clear';
import prefix from './prefix';

const commands: Command[] = [banner, help, describe, clear, prefix];

export default commands;
