// imports
import commands from '../commands';

const runCommand = (input: string) => {
  if (!input) return;

  const command = commands.find(command => command.syntax.test(input));

  if (command) {
    const args = input.split(' ').slice(1).join(' ');
    command.execute(args);
    return;
  }

  const similar = commands.find(command => command.names.some(name => name.includes(input)));
  console.log(global.basicError);

  if (similar) console.log(`Did you mean ${similar.usage}?`);
};

export default runCommand;
