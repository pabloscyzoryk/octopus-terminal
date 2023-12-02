// imports
import type Command from '../types/command';

const exit: Command = {
    names: ['exit', 'quit', 'q', 'close', 'x'],
    description: 'Usage: "exit" or "quit" or "q" or "close" or "x" ; closes the program',
    syntax: new RegExp(/^(exit|quit|q|x|close)$/),
    usage: '"exit" or "quit" or "q" or "close" or "x"',
    execute: () => process.exit(0),
}

export default exit;