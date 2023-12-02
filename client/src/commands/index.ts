// imports
import type Command from '../types/command';
import banner from './banner';
import help from './help';
import describe from './describe';
import clear from './clear';

const commands: Command[] = [banner, help, describe, clear];

export default commands;