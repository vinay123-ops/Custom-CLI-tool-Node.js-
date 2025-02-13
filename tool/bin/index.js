#!/usr/bin/env node


const arg = require('arg');   // one can use the JS inbuild one as well ((process.args))
const chalk = require('chalk'); // for beautification.
const getConfig = require('../src/config/config-mgr');   //if changes are made to the json by the user
const start = require('../src/commands/start');  // strating teh commadns

try {
  const args = arg({
    '--start': Boolean,
    '--build': Boolean,
  });

  if (args['--start']) {
    const config = getConfig();
    start(config);
  }
} catch (e) {
  console.log(chalk.yellow(e.message));
  console.log();
  usage();
}

function usage() {
  console.log(`${chalk.whiteBright('tool [CMD]')}
  ${chalk.greenBright('--start')}\tStarts the app
  ${chalk.greenBright('--build')}\tBuilds the app`);
}