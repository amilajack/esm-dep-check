const chalk = require('chalk');
const Table = require('cli-table2');
const depCheck = require('./src/DepCheck').default;

const table = new Table({
  head: [chalk.bold.black('Dependency'), chalk.bold.black('"module"/"jsnext:main"')],
  colWidths: [30, 30]
});

depCheck().forEach(dep => {
  table.push([
    dep.name,
    dep.supportsEsm
      ? chalk.green('true')
      : chalk.red('false')
  ]);
});

console.log(table.toString());
