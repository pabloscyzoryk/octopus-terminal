// imports
import type Command from "../types/command";

const echo: Command = {
    names: ["echo"],
    description: 'Usage: "echo" <message> ; prints <message> to the console',
    syntax: new RegExp(/^echo\s.+/),
    usage: '"echo" <message>',
    execute: (input: string) => console.log(input),
}

export default echo;