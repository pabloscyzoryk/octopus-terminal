type Command = {
  names: string[];
  description: string;
  execute: (input?: string) => void;
  syntax: RegExp;
  usage: string;
};

export default Command;
