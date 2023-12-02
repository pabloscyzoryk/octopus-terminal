// imports
import type Command from "../types/command";

const execute = (input: string) => {
    input === '&nbsp' ? global.prefix = ' ' : global.prefix = input;
    console.log(`Command prefix set to ${input}`);
}

const prefix: Command = {
    names: ["prefix"],
    description: 'Usage: "prefix" <prefix> ; sets the command prefix to <prefix>, can use &nbsp for space',
    syntax: new RegExp(/^prefix\s.+/),
    usage: '"prefix" <prefix>',
    execute,
}

export default prefix;