// imports
import type Command from '../types/command';
import banner from './banner';
import help from './help';
import describe from './describe';

const commands: Command[] = [banner, help, describe];

export default commands;