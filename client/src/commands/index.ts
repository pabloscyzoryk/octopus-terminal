// imports
import type Command from '../types/command';
import banner from './banner';
import help from './help';

const commands: Command[] = [banner, help];

export default commands;