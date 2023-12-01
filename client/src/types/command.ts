type Command = {
  names: string[];
  description: string;
  execute: (input?: string) => void | Promise<any>;
  syntax: RegExp;
  usage: string;
};

export default Command;
