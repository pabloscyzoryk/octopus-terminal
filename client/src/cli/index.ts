// imports
import runCommand from '../utils/runCommand';

const cli = (argv: string[]) => {
    if (argv.length <= 2 || (!global.password && argv.length < 3)) return
    global.cliMode = true;
    if (global.password && argv[2] !== global.password) process.exit(0);
    runCommand(argv.slice(global.password ? 3 : 2).join(' '));
    if (!global.isLoading) process.exit(0);
};

export default cli;
