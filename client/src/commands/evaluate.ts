// imports
import type Command from '../types/command';

const evaluate: Command = {
    names: ['eval'],
    description: 'Usage: "eval" <code> ; evaluates <code> with eval() in node.js (may be dangerous / buggy)',
    syntax: new RegExp(/^eval\s.+/),
    usage: '"eval" <code>',
    execute: (input: string) => eval(input),
}

export default evaluate;
