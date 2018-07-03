const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const Table = require('cli-table3');
const depCheck = require('./src/DepCheck').default;

if (fs.existsSync(path.join(process.cwd(), 'package.json'))) {
  const table = new Table({
    head: [chalk.bold.black('Dependency'), chalk.bold.black('"module"/"jsnext:main"')],
    colWidths: [30, 30]
  });

  depCheck().forEach((dep) => {
    table.push([
      dep.name,
      dep.supportsEsm
        ? chalk.green('true')
        : chalk.red('false')
    ]);
  });

  console.log(table.toString());
} else {
  console.log(chalk.bgYellowBright.black('No "package.json" found'));
}
