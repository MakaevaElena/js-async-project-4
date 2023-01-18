import { program } from 'commander';
import axios from 'axios';
import fs from 'fs';

const baseLink = 'https://ru.hexlet.io/courses';
const helpMsg = 'help massage';

const command = (link = baseLink, version, output, help) => {
  axios
    .get(link)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error))
    .finally(() => console.log('finally'));

  if (version) {
    console.log(program.version);
    if (output) {
      const dir = dirName;
    }
    if (help) {
      console.log(helpMsg);
    }
  }
};

program
  .option('-V, --version', 'output the version number')
  .option('-0, --output [dir]', 'output dir (default: "/home/user/current-dir")')
  .option('-h, --help', 'display help for command')
  .version('0.0.1')
  //   .arguments('<url>')
  //   .action(command)
  .parse(process.argv);

const { args } = program;
const options = program.opts();
const { version, output, help } = options;

command(args, version, output, help);
